export interface IEmployee {
  id: number
  first_name: string
  last_name: string
  date_of_birth: Date
  gender: string
  phone_number: string
  email: string
  address: string
  dob: Date
  department_id: { _id: string, name: string }
}
