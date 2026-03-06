import { UseFormRegister, FieldErrors } from "react-hook-form"
import { UserFormData } from "@/types/users"

type Props = {
  register: UseFormRegister<UserFormData>
  errors: FieldErrors<UserFormData>
}

export default function Step1({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      {/* First Name Field */}
      <div className="form-group">
        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Enter your first name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name Field */}
      <div className="form-group">
        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          id="lastName"
          type="text"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.lastName.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Enter your email address"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="form-group">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Enter a secure password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="form-group">
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  )
}