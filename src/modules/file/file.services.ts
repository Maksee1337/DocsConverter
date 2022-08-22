import { Request, Response } from "express"
import path from 'path';
import { FilesModel } from "../../models/files.model"
class FileServices {
   async UploadFile(req: Request, res: Response) {
        let fileData = req.file;
        console.log(fileData);
        if (!fileData) {
            return res.send("File uploading error");
        } else {
            const file: FilesModel = await FilesModel.create({
                originalname: fileData.originalname,
                filename: fileData.filename,
                size: fileData.size,
                type: path.extname(fileData.originalname),
            });
            return res.status(201).json(file);
        }
    }
}

export = new FileServices();
