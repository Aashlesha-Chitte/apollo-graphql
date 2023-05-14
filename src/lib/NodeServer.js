/* eslint-disable no-console */
/* eslint-disable max-len */
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import Express from 'express';
import helmet from 'helmet';
import methodOverride from 'method-override';
import { ApolloServer } from 'apollo-server-express';
// import { v4 as uuidv4 } from 'uuid';

// import {
//   ProductsService,
// } from '../services';
import {
    UsersService,
  } from '../services'
import config from '../config/configurations';

const {
  gqlPlayground,
} = config;

export default class Server {
  constructor(configs) {
    this.config = configs;
    this.app = new Express();
    this.run = this.run.bind(this);
  }

  get application() {
    return this.app;
  }

  /**
   * To enable all the setting on our express app
   * @returns -Instance of Current Object
   */
  bootstrap() {
    // this._initHeaders();
    this._initHelmet();
    this._initCompress();
    // this._initCookieParser();
    this._initCors();
    // this._initSecurity();
    this._initJsonParser();
    this._initMethodOverride();
    this._setupRoutes();
    return this;
  }

  /**
   *
   * @returns -Instance of Current Object
   */
  run() {
    const { port, env } = this.config;
    this.httpServer.listen(port, () => {
      console.log(`server started on port ${port} (${env})`);
    });

    return this;
  }

  async setupApollo(schema) {
    const { app } = this;

    this.server = new ApolloServer({
      // ...schema,
      // formatError: (err) => err,
      // debug: graphqlEnvCheck(),
      // introspection: gqlIntrospection,
      // playground: gqlPlayground,
      schema,

      dataSources: () => ({
        // productsService: new ProductsService(),
        usersService: new UsersService(),
      }),
      // context: async ({ req, connection }) => {
      // const authData = await authInstance.authenticate({ req, connection });
      // const reqBody = req.body.query;

      // if (reqBody.includes('mca')) {
      //   const { userClaims: { Access_Rights: accessRights = [] } = {} } = authData;
      //   const authEntity = accessRights.map((e) => JSON.parse(e)).filter(
      //     (e) => (e.type === 'application' && e.resource === 'MCA')
      //       || (e.type === 'entity' && e.resource === 'audience'),
      //   );
      //   if (!authEntity.length) {
      //     throw Error('You need to be authenticated to access this schema!');
      //   }
      // }
      // if (!authData.correlationid) {
      //   authData.correlationid = req.headers['x-b3-traceid'] || uuidv4();
      //   authData.istioHeaders = {
      //     'x-b3-traceid': req.headers['x-b3-traceid'] || uuidv4(),
      //     'x-request-id': req.headers['x-request-id'] || '',
      //     'x-b3-spanid': req.headers['x-b3-spanid'] || '',
      //     'x-b3-parentspanid': req.headers['x-b3-parentspanid'] || '',
      //     'x-b3-sampled': req.headers['x-b3-sampled'] || '',
      //     'x-b3-flags': req.headers['x-b3-flags'] || '',
      //   };
      // }
      // authData.logger = log(authData.correlationid);
      // return authData;
      // },
      // plugins: [
      //   {
      //     requestDidStart: () => ({
      //       willSendResponse: (requestContext) => {
      //         requestContext.response.http.headers.set(
      //           'Strict-Transport-Security',
      //           'max-age=31536000; includeSubDomains',
      //         );
      //         requestContext.response.http.headers.set(
      //           'X-Frame-Options',
      //           'SAMEORIGIN',
      //         );
      //         requestContext.response.http.headers.set(
      //           'X-XSS-Protection',
      //           '1; mode=block',
      //         );
      //         requestContext.response.http.headers.set(
      //           'X-Content-Type-Options',
      //           'nosniff',
      //         );
      //         requestContext.response.http.headers.set(
      //           'Cache-control',
      //           'no-store,no-cache',
      //         );
      //         requestContext.response.http.headers.set(
      //           'Content-Security-Policy',
      //           'font-src "self"',
      //         );
      //         requestContext.response.http.headers.set('Pragma', 'no-cache');
      //         requestContext.response.http.headers.set(
      //           'Access-Control-Allow-Methods',
      //           'GET, POST, PUT, DELETE',
      //         );
      //         requestContext.response.http.headers.set(
      //           'Access-Control-Allow-Origin',
      //           '*',
      //         );
      //       },
      //     }),
      //   },
      // ],
      onHealthCheck: () => new Promise((resolve) => {
        resolve('I am OK');
      }),
    });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }

  /**
   * Compression of the output
   */
  _initCompress() {
    this.app.use(compress());
  }

  // /**
  //  * Parse Cookie header and populate req.cookies with an object keyed by the cookie names
  //  */
  // _initCookieParser() {
  //   this.app.use(cookieParser());
  // }

  /**
   *
   * Lets you to enable cors
   */
  _initCors() {
    const corsOptions = {
      methods: 'GET,POST,OPTIONS',
      origin: this.config.corsOrigin,
      optionsSuccessStatus: 200,
      credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
    };

    this.app.use(cors(corsOptions));
  }

  // /**
  //  *
  //  * Add the security header
  //  */

  // _initSecurity() {
  //   this.app.use((req, res, next) => {
  //     res.setHeader('Pragma', 'no-cache');
  //     res.setHeader('Cache-Control', 'no-store, no-cache');
  //     next();
  //   });
  // }

  /**
   *
   * Helmet helps you secure your Express apps by setting various HTTP headers.
   */
  _initHelmet() {
    this.app.use(helmet());
  }

  /**
   *  - Parses urlencoded bodies & JSON
   */
  _initJsonParser() {
    this.app.use(bodyParser.json({ limit: '2mb' }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   *
   * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
   */
  _initMethodOverride() {
    this.app.use(methodOverride());
  }

  /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
  _setupRoutes() {
    this.app.use('/health-check', (req, res) => {
      res.send('I am OK');
    });
  }
}
