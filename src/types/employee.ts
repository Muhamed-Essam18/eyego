export type EmployeeStatus = "active" | "on_leave" | "terminated";

export type Gender = "male" | "female";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  salary: number;
  department: string;
  role: string;
  status: EmployeeStatus;
  joinedDate: string;
}
