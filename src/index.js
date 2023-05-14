import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { buildFederatedSchema } from '@apollo/federation';
import path from 'path';
import gql from 'graphql-tag';

import resolvers from './modules';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const schema = mergeTypes(typesArray, { all: true });

const typeDefs = gql`
  ${schema}
`;

export default buildFederatedSchema([{ typeDefs, resolvers }]);
