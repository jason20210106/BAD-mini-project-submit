import Knex from "knex";
import knexConfigs from "./knexfile"

const configMode = process.env.NODE_ENV || "development";
const knexConfig = knexConfigs[configMode];
export const knex = Knex(knexConfig);