import { User } from "./User";


class Database {
  #storage : User[] = [];

  get getUser() {
    return this.#storage
  }

  setUser(user: User) {
    this.#storage.push(user);
  }

}
export {Database};