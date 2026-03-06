"use client"

import UserTable from "@/components/users/UserTable"
import Link from "next/link"

export default function UsersPage(){

 return(

  <div className="max-w-6xl mx-auto px-6 py-10">

   <div className="flex justify-between items-center mb-8">

    <h1 className="text-3xl font-bold text-gray-800">
      User Management Dashboard
    </h1>

    <Link href="/users/create">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow">
        + Create User
      </button>
    </Link>

   </div>

   <UserTable/>

  </div>

 )
}