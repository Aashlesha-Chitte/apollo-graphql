import { config } from 'dotenv';

import * as Joi from 'joi';

config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().default('development'),
  PORT: Joi.number().default(9001),
  CONFIG_URL: Joi.string()
    .default('http://localhost:9000'),
}).unknown()
  .required();

const { value: envVars } = Joi.validate(process.env, envVarsSchema);

const configurations = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  configURL: process.env.CONFIG_URL,
});

export default configurations;
