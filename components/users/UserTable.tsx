"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import UserRow from "./UserRow"
import { useState } from "react"

export default function UserTable() {

 const users =
  useSelector((state:RootState)=>state.users.users)

 const [search,setSearch] = useState("")

 const filteredUsers =
  users.filter(u =>
   u.firstName
    .toLowerCase()
    .includes(search.toLowerCase())
  )

 return(
<div className="bg-white shadow-lg rounded-xl p-8">

 <input
  placeholder="Search user..."
  className="border border-gray-300 p-3 rounded-lg mb-6 w-full text-lg"
  onChange={(e)=>setSearch(e.target.value)}
 />

 <table className="w-full text-left border-collapse">

  <thead>

   <tr className="bg-gray-100 text-gray-700 text-lg">

    <th className="p-4">Name</th>
    <th className="p-4">Email</th>
    <th className="p-4">Department</th>
    <th className="p-4">Role</th>
    <th className="p-4">Status</th>
    <th className="p-4">Actions</th>

   </tr>

  </thead>

  <tbody className="text-gray-700">

   {filteredUsers.map(user=>(
    <UserRow key={user.id} user={user}/>
   ))}

  </tbody>

 </table>

</div>
 )
}