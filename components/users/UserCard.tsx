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

    <div className="border-2 border-gray-200 rounded-2xl p-8 pl-12 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">

      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-blue-100">
        {user.firstName} {user.lastName}
      </h3>

      <div className="space-y-4 mb-6 pl-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📧</span>
          <p className="text-gray-700 font-medium">{user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">📱</span>
          <p className="text-gray-700 font-medium">{user.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏢</span>
          <p className="text-gray-700 font-medium">{user.department}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">💼</span>
          <p className="text-gray-700 font-medium">{user.role}</p>
        </div>
      </div>

      <div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
        <p className={`text-center font-bold text-lg ${
          user.status === "Active"
            ? "text-green-600"
            : "text-red-600"
        }`}>
          {user.status}
        </p>
      </div>

      <div className="flex gap-4">

        <button
          onClick={() => dispatch(toggleStatus(user.id))}
          className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold px-4 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
        >
          Toggle
        </button>

        <button
          onClick={() => dispatch(deleteUser(user.id))}
          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-4 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
        >
          Delete
        </button>

      </div>

    </div>

  )
}