export type UserFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  department: string
  role: string
}

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  department: string
  role: string
  status: "Active" | "Inactive"
}