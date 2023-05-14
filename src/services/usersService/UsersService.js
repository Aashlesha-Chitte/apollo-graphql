import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../../config/configurations';

class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.configURL;
  }

  async getUsers() {
    console.log(
      `UsersService ::: getUsers ::: Start > baseUrl ${this.baseURL} `,
    );
    const url = `${this.baseURL}/api/users`;
    return this.get(url);
  }

  async createUser(data) {
    console.log(
      `UsersService ::: createProduct ::: Start > baseUrl ${this.baseURL} `,
    );
    console.log(
      `UsersService ::: createProduct ::: Start > data ${JSON.stringify(data)} `,
    );
    const url = `${this.baseURL}/api/users`;
    return this.post(url, data);
  }

}

export default UsersService;
