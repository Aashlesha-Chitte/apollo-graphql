import { ProductsQuery, ProductsMutation } from './products';
import { UsersQuery, UsersMutation } from './users';

export default {
  Query: {
    ...ProductsQuery,
    ...UsersQuery,
  },
  Mutation: {
    ...ProductsMutation,
    ...UsersMutation
  },
};
