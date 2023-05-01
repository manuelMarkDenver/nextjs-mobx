export enum Status {
  Active = "Active",
  Inactive = "Inactive",
  Suspended = "Suspended"
}

export enum Role {
  User = "User",
  Admin = "Admin"
}

export type User = {
  id: string | number
  name: string
  email: string
  role: Role
  status: Status
}