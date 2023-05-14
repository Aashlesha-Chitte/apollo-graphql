import { ErrorHandler, createErrorObj, getErrorUserName } from '../../lib';

const Mutation = {
  updateProduct: async (
    parent,
    { id, input },
    { dataSources },
  ) => {
    try {
      console.log(
        'productsServiceMutation ::: updateProduct ::: Start',
        `payload ${JSON.stringify({
          id,
          input,
        })}`,
      );
      const result = await dataSources.productsService.updateProduct(
        {
          id,
          input,
        },
      );
      console.log(
        'productsServiceMutation ::: updateProduct ::: Success',
        result,
      );
      return result;
    } catch (err) {
     console.error(
        'productsServiceMutation ::: updateProduct ::: Error',
        err,
      );
      // throw new ErrorHandler(createErrorObj(err));
    }
  },

  createProduct: async (
    parent,
    { input },
    { dataSources },
  ) => {
    try {
      console.log(
        'productsServiceMutation ::: createProduct ::: Start',
        `payload ${JSON.stringify(input)},`
      );
      const result = await dataSources.productsService.createProduct(
        input,
      );
      console.log(
        'productsServiceMutation ::: createProduct ::: Success',
        result,
      );
      return result;
    } catch (err) {
     console.error(
        'productsServiceMutation ::: createProduct ::: Error',
        err,
      );
      // throw new ErrorHandler(createErrorObj(err));
    }
  },

   deleteProduct: async (parent, { id }, { dataSources }) => {
    try {
      console.log(
        'productsServiceMutation ::: deleteProduct ::: Start',
        `payload ${JSON.stringify({ id })}`,
      );
      const result = await dataSources.productsService.deleteProduct({
        id,
      });
      console.log(
        'productsServiceMutation ::: deleteProduct ::: Success',
        result,
      );
      return result;
    } catch (err) {
     console.error(
        'productsServiceMutation ::: deleteProduct ::: Error',
        err,
      );
      // const errorJson = createErrorObj(err);
      // if (errorJson.message === 'Audience is locked by another user') {
      //   const userName = await getErrorUserName(errorJson, dataSources);
      //   errorJson.message = `Sorry, you cannot access this audience as ${userName} is currently in the audience`;
      // }
      // throw new ErrorHandler(errorJson);
    }
  },

};

export default Mutation;
