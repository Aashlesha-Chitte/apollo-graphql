/* eslint-disable no-param-reassign */
import config from '../config/configurations';

const PRODUCTION = 'prod-g1ds';
const STAGING = 'stg-g1ds';
const INT = 'int-g1ds';
const NFT = 'nft-g1ds';
const DEMO = 'demo-g1ds';
const BRP = 'brp-g1ds';
const ENVCheck = [PRODUCTION, STAGING, INT, NFT, DEMO, BRP];

export const graphqlEnvCheck = () => (!ENVCheck.includes(config.env));
export const createErrorObj = (err) => {
  if (
    err
    && err.extensions
    && err.extensions.response
    && err.extensions.response.body
  ) {
    if (err.extensions.response.body.data && err.extensions.response.body.data.length) {
      err.extensions.response.body.data[0].message = err.extensions.response.body.data[0].msg;
      err.extensions.response.body.data[0].status = err.extensions.response.status;
      // err.extensions.response.body.data[0].value = err.extensions.response.body.data[0].value;
      return err.extensions.response.body.data[0];
    }
    if (err.extensions.response.body.metadata) {
      return err.extensions.response.body.metadata;
    }
    return err.extensions.response.body;
  }
  return err;
};

export const getErrorUserName = async (errorJson, dataSources) => {
  const errorValueJson = JSON.parse(errorJson.value);
  const { accessToken: token } = await dataSources.userFactoryToken;
  const users = await dataSources.userManagementService.getUserList(
    {
      oktaIds: [errorValueJson.userOktaId],
    },
    token,
  );
  const user = users.find((el) => el.oktaId === errorValueJson.userOktaId);
  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : 'Unknown';
  return userName;
};
