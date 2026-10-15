import { DB_CONFIG } from "../config/index.js";
import { Sequelize } from "sequelize";

const sq = new Sequelize(DB_CONFIG.URI, DB_CONFIG.OPTIONS);

export { sq };
