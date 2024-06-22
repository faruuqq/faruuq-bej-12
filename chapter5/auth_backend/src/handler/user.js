class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async getAll(req, res) {
    const users = await this.userService.getAll();

    res.status(200).send({
      users: users
    });
  }

  async getByEmail(req, res) {
    const email = req.params.email;
    const user = await this.userService.getByEmail(email);

    let statusCode = 200;

    if (user === null) {
      statusCode = 404;
    }

    res.status(statusCode).send({
      user: user
    });
  }

  async register(req, res) {
    const newUser = req.body
    console.log(newUser)
    const createdUser = await this.userService.insert(newUser);
    if (createdUser) {
      res.status(204).send({user: createdUser})
    } else {
      res.status(400).send()
    }
  }

  async login(req, res) {
    const user = req.body
    const login = await this.userService.login(user)
    if (login) {
      res.status(200).send({ 'status': 'success login' })
    } else {
      res.status(400).send({ 'status': 'failed login'})
    }
    
  }
}

module.exports = UserHandler;