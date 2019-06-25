import { RESTDataSource } from 'apollo-datasource-rest';

class Users extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL || undefined;
  }

  async getUsers(limit = 50, where = '') {
    const queryParams = { limit, where };
    return this.get('/users', queryParams);
  }

  async login (email, password) {
    return {user: {example: 'string'}};
  }

  async me(id) {
    return {user: {example: 'string'}};
  }
}

export default Users;
