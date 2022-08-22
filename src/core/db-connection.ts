import { Sequelize } from "sequelize-typescript";
import { FilesModel } from "../models/files.model"
import { QueueModel } from "../models/queue.model"

const connection = new Sequelize(
    process.env.DB_SCHEMA,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        models: [FilesModel, QueueModel]
    });

export default connection;
