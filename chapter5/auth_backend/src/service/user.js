class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;

    // this.getAll = this.getAll.bind(this);
    // this.getByEmail = this.getByEmail.bind(this);
    // this.insert = this.insert.bind(this);
    // this.login = this.login.bind(this);
  }

  async getAll() {
    const users = await this.userRepository.getAll();

    return users;
  }

  async getByEmail(email) {
    const user = await this.userRepository.getByEmail(email);

    if (user === undefined) {
      return null;
    }

    return user;
  }

  async insert(user) {
    const newUser = await this.userRepository.insert(user);
    return newUser
  }

  async login(user) {
    const foundUser = await this.getByEmail(user.email);
    if (foundUser && foundUser[0].password === user.password) {
      return true
    } else {
      return false
    }
  }
}

module.exports = UserService;