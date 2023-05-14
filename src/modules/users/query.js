import { ErrorHandler, createErrorObj } from '../../lib';

const Query = {
  getUsers: async (_parent, args, { dataSources, logger }) => {
    try {
      console.log(
        'getUsersQuery ::: getUsers ::: Start',
      );
      const result = await dataSources.usersService.getUsers();
      console.log('getUsersQuery ::: getUsers ::: Success', result);
      return result;
    } catch (err) {
      logger.error('getUsersQuery ::: getUsers ::: Error', err);
      throw new ErrorHandler(createErrorObj(err));
    }
  },
};

export default Query;
