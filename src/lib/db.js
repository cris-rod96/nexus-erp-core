import { DB_CONFIG } from "../config/index.js";
import { Sequelize } from "sequelize";
import { models } from "../models/index.models.js";

const sq = new Sequelize(DB_CONFIG.URI, DB_CONFIG.OPTIONS);

models.forEach((m) => m(sq));

const { Users } = sq.models;

export { sq, Users };
