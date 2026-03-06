import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form"
import { UserFormData } from "@/types/users"
import departments from "@/data/department.json"
import roles from "@/data/role.json"

type Props = {
  register: UseFormRegister<UserFormData>
  watch: UseFormWatch<UserFormData>
  errors?: FieldErrors<UserFormData>
}

export default function Step2({ register, watch, errors }: Props) {

  const department = watch("department")

  const filteredRoles =
    roles.filter(r => r.department === department)

  return (
    <div className="space-y-6">
      {/* Phone Number Field */}
      <div className="form-group">
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Enter your phone number"
          {...register("phone")}
        />
        {errors?.phone && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.phone.message}
          </p>
        )}
      </div>

      {/* Department Field */}
      <div className="form-group">
        <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
          Department <span className="text-red-500">*</span>
        </label>
        <select
          id="department"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition appearance-none cursor-pointer bg-white"
          {...register("department")}
        >
          <option value="">Select a department</option>

          {departments.map(d => (
            <option key={d.id} value={d.department}>
              {d.department}
            </option>
          ))}

        </select>
        {errors?.department && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.department.message}
          </p>
        )}
      </div>

      {/* Role Field */}
      <div className="form-group">
        <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
          Role <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition appearance-none cursor-pointer bg-white disabled:bg-gray-100 disabled:text-gray-400"
          {...register("role")}
          disabled={!department}
        >
          <option value="">Select a role</option>

          {filteredRoles.map(r => (
            <option key={r.id} value={r.role}>
              {r.role}
            </option>
          ))}

        </select>
        {errors?.role && (
          <p className="text-red-500 text-sm font-medium mt-1.5 flex items-center gap-1">
            <span className="text-lg">⚠</span> {errors.role.message}
          </p>
        )}
      </div>
    </div>
  )
}