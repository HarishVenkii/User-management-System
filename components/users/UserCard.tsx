"use client"

import { useDispatch } from "react-redux"
import { deleteUser, toggleStatus } from "@/store/userSlice"
import { User } from "@/types/users"

type Props = {
  user: User
}

export default function UserCard({ user }: Props) {

  const dispatch = useDispatch()

  return (

    <div className="border rounded-lg p-4 shadow-md bg-white">

      <h3 className="text-lg font-semibold">
        {user.firstName} {user.lastName}
      </h3>

      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-gray-600">{user.department}</p>
      <p className="text-gray-600">{user.role}</p>

      <p
        className={`mt-2 font-medium ${
          user.status === "Active"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {user.status}
      </p>

      <div className="flex gap-2 mt-4">

        <button
          onClick={() => dispatch(toggleStatus(user.id))}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => dispatch(deleteUser(user.id))}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  )
}