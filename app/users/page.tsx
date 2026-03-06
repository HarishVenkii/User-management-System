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

  <div>

   <Link href="/users/create">
    <button>Create User</button>
   </Link>

   <div>

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