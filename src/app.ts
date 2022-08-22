import dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response} from 'express';
import "reflect-metadata";
import connection from "./core/db-connection";
import multer from 'multer'

const app = express();

import routes from './routes.js';
import { Converter } from "./services/converter"

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("file"));

app.use('/api', routes);

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, async () => {
    await connection.sync();
    const converter = new Converter();
    converter.run().then(() => {});
    console.log(`Server started on port ${port}`);
});


