import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "@/types/users"

interface State {
 users: User[]
}

const initialState: State = {
 users: []
}

const userSlice = createSlice({

 name: "users",
 initialState,

 reducers: {

  addUser: (state, action: PayloadAction<User>) => {
   state.users.push(action.payload)
  },

  updateUser: (state, action: PayloadAction<User>) => {

   const index = state.users.findIndex(
    u => u.id === action.payload.id
   )

   if(index !== -1){
    state.users[index] = action.payload
   }

  },

  deleteUser: (state, action: PayloadAction<string>) => {

   state.users = state.users.filter(
    u => u.id !== action.payload
   )

  },

  toggleStatus: (state, action: PayloadAction<string>) => {

   const user = state.users.find(
    u => u.id === action.payload
   )

   if(user){

    user.status =
     user.status === "Active"
     ? "Inactive"
     : "Active"

   }

  }

 }

})

export const {
 addUser,
 updateUser,
 deleteUser,
 toggleStatus
} = userSlice.actions

export default userSlice.reducer