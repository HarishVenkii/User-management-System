import Link from "next/link"
import { User } from "@/types/users"

export default function UserRow({ user }: { user: User }) {

  return (

    <tr className="border-b">

      <td>{user.firstName} {user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.department}</td>
      <td>{user.role}</td>

      <td>

        <span
          className={`px-2 py-1 rounded text-white text-sm ${
            user.status === "Active"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {user.status}
        </span>

      </td>

      <td className="flex gap-2 py-2">

        {/* EDIT BUTTON */}

        <Link href={`/users/edit/${user.id}`}>

          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">

            Edit

          </button>

        </Link>

      </td>

    </tr>

  )
}