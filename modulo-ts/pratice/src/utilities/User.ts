export class User {
  name: string
  password: string
  email: string
  role: Role
  gender: Gender
  constructor(name:string, password:string, email:string, role:Role, gender:Gender) {
    this.name = name,
    this.password = password,
    this.email = email,
    this.role = role,
    this.gender = gender
  }
}