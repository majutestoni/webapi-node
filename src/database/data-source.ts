import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateEmpresa1686677786090} from '../database/migrations/1686677786090-createEmpresa'
import Empresa from "../app/entities/Empresa"
import { CreateLicensaAmbiental1686681261270 } from "./migrations/1686681261270-createLicensaAmbiental"
import LicensaAmbiental from "../app/entities/LicensaAmbiental"
import { InsertValues1687191132224 } from "./migrations/1687191132224-insertValues"
import { InsertLicensa1687191682720 } from "./migrations/1687191682720-insertLicensa"
require('dotenv/config');

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Empresa, LicensaAmbiental],
    migrations: [CreateEmpresa1686677786090, CreateLicensaAmbiental1686681261270,InsertValues1687191132224, InsertLicensa1687191682720],
    subscribers: [],
})
