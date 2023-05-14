import { ErrorHandler, createErrorObj } from '../../lib';

const Query = {
  // /**
  //  * This query returns activation task of audiences
  //  * @param {String} _parent
  //  * @param {String} args
  //  * @param {Object} dataSources, logger
  //  * @returns activation task w.r.t audience id
  //  */
  // mcaGetLiverampTaskById: async (_parent, { id }, { dataSources, logger }) => {
  //   try {
  //     console.log(
  //       'ActivationTaskQuery ::: mcaGetLiverampTaskById ::: Start',
  //       `payload ${JSON.stringify({ id })}`,
  //     );
  //     const result = await dataSources.activationTaskService.mcaGetLiverampTaskById(id);
  //     console.log('ActivationTaskQuery ::: mcaGetLiverampTaskById ::: Success', result);
  //     return result;
  //   } catch (err) {
  //     logger.error('ActivationTaskQuery ::: mcaGetLiverampTaskById ::: Error', err);
  //     throw new ErrorHandler(createErrorObj(err));
  //   }
  // },

  // /**
  //  * This query returns activation task of zeotap audiences
  //  * @param {String} _parent
  //  * @param {String} args
  //  * @param {Object} dataSources, logger
  //  * @returns activation task w.r.t zeotap audience id
  //  */
  // mcaGetZeotapTaskById: async (_parent, { id }, { dataSources, logger }) => {
  //   try {
  //     console.log(
  //       'ActivationTaskQuery ::: mcaGetZeotapTaskById ::: Start',
  //       `payload ${JSON.stringify({ id })}`,
  //     );
  //     const result = await dataSources.activationTaskService.mcaGetZeotapTaskById(id);
  //     console.log('ActivationTaskQuery ::: mcaGetZeotapTaskById ::: Success', result);
  //     return result;
  //   } catch (err) {
  //     logger.error('ActivationTaskQuery ::: mcaGetZeotapTaskById ::: Error', err);
  //     throw new ErrorHandler(createErrorObj(err));
  //   }
  // },

  // /**
  //  * This query returns activation task list
  //  * @param {String} _parent
  //  * @param {String} args
  //  * @param {Object} dataSources, logger
  //  * @returns activation task lists
  //  */
  // mcaGetTaskList: async (_parent, args, { dataSources, logger }) => {
  //   try {
  //     console.log(
  //       'ActivationTaskQuery ::: mcaGetTaskList ::: Start',
  //       `payload ${JSON.stringify({ args })}`,
  //     );
  //     const resultFromSVC = await dataSources.activationTaskService.mcaGetTaskList(args);
  //     let responseData = [];
  //     // if (resultFromSVC.data.length) {
  //     //   const oktaIds = resultFromSVC.data.map(
  //     //     (el) => el.modifiedBy || el.createdBy,
  //     //   );
  //     //   // const { accessToken: token } = await dataSources.userFactoryToken;
  //     //   // const users = await dataSources.userManagementService.getUserList(
  //     //   //   {
  //     //   //     oktaIds,
  //     //   //   },
  //     //   //   token,
  //     //   // );

  //     //   responseData = resultFromSVC.data.map((el) => {
  //     //     const user = users.find(
  //     //       (item) => item.oktaId === (el.modifiedBy || el.createdBy),
  //     //     );
  //     //     return {
  //     //       ...el,
  //     //       userName: user ? `${user.firstName} ${user.lastName}` : 'Unknown',
  //     //     };
  //     //   });
  //     // }

  //     const resultData = {
  //       ...resultFromSVC,
  //       // data: responseData,
  //     };

  //     console.log('ActivationTaskQuery ::: mcaGetTaskList ::: Success');
  //     return resultData;
  //   } catch (err) {
  //     logger.error('ActivationTaskQuery ::: mcaGetTaskList ::: Error', err);
  //     throw new ErrorHandler(createErrorObj(err));
  //   }
  // },

  /**
   * This query returns activation task list
   * @param {String} _parent
   * @param {String} args
   * @param {Object} dataSources, logger
   * @returns activation task lists
   */
  getProducts: async (_parent, args, { dataSources, logger }) => {
    try {
      console.log(
        'ActivationTaskQuery ::: getProducts ::: Start',
      );
      const resultFromSVC = await dataSources.productsService.getProducts();
      console.log('ActivationTaskQuery ::: getProducts ::: Success', resultFromSVC);
      return resultFromSVC;
    } catch (err) {
      logger.error('ActivationTaskQuery ::: getProducts ::: Error', err);
      throw new ErrorHandler(createErrorObj(err));
    }
  },
};

export default Query;
