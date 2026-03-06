"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "@/schemas/userSchema"
import { UserFormData, User } from "@/types/users"
import { useState } from "react"

import { useDispatch } from "react-redux"
import { addUser, updateUser } from "@/store/userSlice"
import { v4 as uuid } from "uuid"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import Step1 from "../../Step1"
import Step2 from "../../Step2"
import Step3 from "../../Step3"

type Props = {
  editUser?: User
}

export default function MultiStepForm({ editUser }: Props) {

  const router = useRouter()
  const dispatch = useDispatch()

  const [step, setStep] = useState(1)

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    getValues,
    formState: { errors }
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: editUser
  })

  const nextStep = async () => {

    let valid = false

    if (step === 1) {
      valid = await trigger([
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword"
      ])
    }

    if (step === 2) {
      valid = await trigger([
        "phone",
        "department",
        "role"
      ])
    }

    if (valid) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const submit = (data: UserFormData) => {

    if (editUser) {

      dispatch(updateUser({
        ...data,
        id: editUser.id,
        status: editUser.status
      }))

      toast.success("User updated")

    } else {

      dispatch(addUser({
        ...data,
        id: uuid(),
        status: "Active"
      }))

      toast.success("User created")
    }

    router.push("/users")
  }

  return (

    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10 mt-10">

      {/* Title */}

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {editUser ? "Edit User" : "Create User"}
      </h2>

      {/* Step Progress Bar */}

      <div className="flex mb-10">

        {[1,2,3].map(i => (
          <div
            key={i}
            className={`flex-1 h-3 mx-2 rounded-full ${
              step >= i ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-8"
      >

        {step === 1 && (
          <Step1 register={register} errors={errors} />
        )}

        {step === 2 && (
          <Step2 register={register} watch={watch} />
        )}

        {step === 3 && (
          <Step3 data={getValues()} />
        )}

        {/* Buttons */}

        <div className="flex justify-between pt-6">

          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-lg"
            >
              Back
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg"
            >
              Next
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg"
            >
              Submit
            </button>
          )}

        </div>

      </form>

    </div>
  )
}