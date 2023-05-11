export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Suspended = 'Suspended',
}

export enum Role {
  User = 'User',
  Admin = 'Admin',
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};
