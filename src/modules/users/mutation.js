import { ErrorHandler, createErrorObj, getErrorUserName } from '../../lib';

const Mutation = {
  createUser: async (
    parent,
    { input },
    { dataSources },
  ) => {
    try {
      console.log(
        'usersServiceMutation ::: createUser ::: Start',
        `payload ${JSON.stringify(input)},`
      );
      const result = await dataSources.usersService.createUser(
        input,
      );
      console.log(
        'usersServiceMutation ::: createUser ::: Success',
        result,
      );
      return result;
    } catch (err) {
     console.error(
        'usersServiceMutation ::: createUser ::: Error',
        err,
      );
    }
  },

};

export default Mutation;
