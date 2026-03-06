import { UserFormData } from "@/types/users"

export default function Step3({ data }: { data: UserFormData }) {

  return (

    <div className="space-y-3">

      <p><b>Name:</b> {data.firstName} {data.lastName}</p>

      <p><b>Email:</b> {data.email}</p>

      <p><b>Phone:</b> {data.phone}</p>

      <p><b>Department:</b> {data.department}</p>

      <p><b>Role:</b> {data.role}</p>

    </div>

  )
}