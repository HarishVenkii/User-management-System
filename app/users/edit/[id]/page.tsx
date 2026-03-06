"use client"

import { useParams } from "next/navigation"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import MultiStepForm from "@/components/users/MultiStepForm"

export default function EditUserPage() {

  const { id } = useParams()

  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === id)
  )

  if (!user) {
    return <p>User not found</p>
  }

  return (

    <div className="max-w-xl mx-auto mt-10">

      <h1 className="text-xl font-bold mb-4">
        Edit User
      </h1>

      <MultiStepForm editUser={user} />

    </div>

  )
}