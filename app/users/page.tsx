"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import UserCard from "@/components/users/UserCard"
import Link from "next/link"

export default function UsersPage(){

 const users =
 useSelector(
  (state:RootState)=>state.users.users
 )

 return(

  <div className="min-h-screen w-full px-6 py-12 pl-8">

    <div className="flex justify-between items-center mb-12">
     <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
      User Management
     </h1>
     <Link href="/users/create">
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 shadow-md">
       + Create User
      </button>
     </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

     {users.map(user => (
      <UserCard
       key={user.id}
       user={user}
      />
     ))}

    </div>

   </div>

  
 )
}