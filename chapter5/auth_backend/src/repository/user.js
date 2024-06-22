const users = [
  {
    id: 1,
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
  {
    id: 2,
    name: "han vir",
    email: "hanvir@gmail.com",
    password: "HanVir123",
  },
  {
    id: 3,
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  }
];

const sql = require('../../db.js')

class UserRepository {

  async getAll() {
    const allUsers = await sql`
      select
        *
      from users
    `
    return allUsers;
  }

  async getByEmail(email) {
    const foundUser = await sql`
      select
        name, email, password
      from users
      where email = ${email}
    `
    return foundUser
  }

  async insert(user) {
    const users = await sql `
      insert into users
        (name, email, password)
      values
        (${user.name}, ${user.email}, ${user.password})
      returning name, email
    `
    return users
  }
}

module.exports = UserRepository;