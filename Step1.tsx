import { UseFormRegister, FieldErrors } from "react-hook-form"
import { UserFormData } from "@/types/users"

type Props = {
  register: UseFormRegister<UserFormData>
  errors: FieldErrors<UserFormData>
}

export default function Step1({ register, errors }: Props) {
  return (
    <div className="space-y-4">

      <input
        className="w-full border p-2 rounded"
        placeholder="First Name"
        {...register("firstName")}
      />
      <p className="text-red-500">{errors.firstName?.message}</p>

      <input
        className="w-full border p-2 rounded"
        placeholder="Last Name"
        {...register("lastName")}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        {...register("email")}
      />

      <input
        type="password"
        className="w-full border p-2 rounded"
        placeholder="Password"
        {...register("password")}
      />

      <input
        type="password"
        className="w-full border p-2 rounded"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />

    </div>
  )
}