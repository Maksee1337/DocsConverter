import { Request, Response } from "express"
import FileServices from './file.services';

class FileController {
    UploadFile(req: Request, res: Response) {
        return FileServices.UploadFile(req, res);
    }
}

export = new FileController();
