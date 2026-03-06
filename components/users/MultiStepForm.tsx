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

    <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-12 mt-12 mb-12 px-6">

      {/* Title */}

      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
        {editUser ? "Edit User" : "Create User"}
      </h2>
      <p className="text-center text-gray-500 text-sm mb-8 font-medium">
        {step === 1 && "Step 1 of 3 - Basic Information"}
        {step === 2 && "Step 2 of 3 - Professional Details"}
        {step === 3 && "Step 3 of 3 - Review & Submit"}
      </p>

      {/* Step Progress Bar */}

      <div className="flex gap-3 mb-12">

        {[1,2,3].map(i => (
          <div key={i} className="flex-1">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                step >= i ? "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg" : "bg-gray-300"
              }`}
            />
          </div>
        ))}

      </div>

      {/* Form */}
      

      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-8 px-4"
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

        <div className="flex flex-col sm:flex-row justify-between pt-8 border-t-2 border-gray-100 gap-4">

          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              ← Back
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Next →
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              ✓ Submit
            </button>
          )}

        </div>

      </form>

    </div>
  )
}