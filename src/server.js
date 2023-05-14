import config from './config/configurations';
import Server from './lib/NodeServer';
import schema from '.';

const server = new Server(config);

const initServer = async () => {
  server.bootstrap()
    .setupApollo(schema);
};

initServer();

export default server;
