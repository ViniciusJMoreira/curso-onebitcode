import { ValidationFullName } from "./ValidationFullName.js"
import { ValidationEmail } from "./ValidationEmail.js"
import { ValidationPassword } from "./ValidationPassword.js"

export class User {
  constructor(fullname, email, password) {
    this.fullname = new ValidationFullName(fullname)
    this.email = new ValidationEmail(email)
    this.password = new ValidationPassword(password)
  }
}