import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../../config/configurations';

class ProductsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.configURL;
  }

  async getProducts() {
    const { logger } = this.context;
    console.log(
      `ProductsService ::: getProducts ::: Start > baseUrl ${this.baseURL} `,
    );
    const url = `${this.baseURL}/api/config/products`;
    return this.get(url);
  }

  async createProduct(data) {
    // const { logger } = this.context;
    console.log(
      `ProductsService ::: createProduct ::: Start > baseUrl ${this.baseURL} `,
    );
    console.log(
      `ProductsService ::: createProduct ::: Start > data ${JSON.stringify(data)} `,
    );
    const url = `${this.baseURL}/api/config/products`;
    return this.post(url, data);
  }

  async updateProduct({id, input}) {
    // const { logger } = this.context;
    console.log(
      `ProductsService ::: updateProduct ::: Start > baseUrl ${this.baseURL} `,
    );
    console.log(
      `ProductsService ::: updateProduct ::: Start > data ${JSON.stringify(input)} `,
    );
    const url = `${this.baseURL}/api/config/products/${id}`;
    return this.put(url, {
      id,
      ...input,
    });
  }

  async deleteProduct({id}) {
    console.log(
      `ProductsService ::: deleteProduct ::: Start > baseUrl ${this.baseURL} `,
    );
    console.log(
      `ProductsService ::: deleteProduct ::: Start > id ${id} `,
    );
    const url = `${this.baseURL}/api/config/products/${id}`;
    return this.delete(url);
  }
}

export default ProductsService;
