import { UseFormRegister, UseFormWatch } from "react-hook-form"
import { UserFormData } from "@/types/users"
import departments from "@/data/department.json"
import roles from "@/data/role.json"

type Props = {
  register: UseFormRegister<UserFormData>
  watch: UseFormWatch<UserFormData>
}

export default function Step2({ register, watch }: Props) {

  const department = watch("department")

  const filteredRoles =
    roles.filter(r => r.department === department)

  return (
    <div className="space-y-4">

      <input
        className="w-full border p-2 rounded"
        placeholder="Phone Number"
        {...register("phone")}
      />

      <select
        className="w-full border p-2 rounded"
        {...register("department")}
      >
        <option value="">Select Department</option>

        {departments.map(d => (
          <option key={d.id} value={d.department}>
            {d.department}
          </option>
        ))}

      </select>

      <select
        className="w-full border p-2 rounded"
        {...register("role")}
      >
        <option>Select Role</option>

        {filteredRoles.map(r => (
          <option key={r.id} value={r.role}>
            {r.role}
          </option>
        ))}

      </select>

    </div>
  )
}