import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateEmpresa1686677786090} from '../database/migrations/1686677786090-createEmpresa'
import Empresa from "../app/entities/Empresa"
import { CreateLicensaAmbiental1686681261270 } from "./migrations/1686681261270-createLicensaAmbiental"
import LicensaAmbiental from "../app/entities/LicensaAmbiental"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "webapi",
    synchronize: true,
    logging: false,
    entities: [Empresa, LicensaAmbiental],
    migrations: [CreateEmpresa1686677786090, CreateLicensaAmbiental1686681261270],
    subscribers: [],
})
