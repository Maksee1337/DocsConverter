import {Request, Response} from "express";
import { v4 as uuidv4 } from 'uuid';
import { ConvertFileDto } from "./dto/convertFile.dto"
import { FilesModel } from "../../models/files.model"
import { QueueModel } from "../../models/queue.model"

class ConverterServices {
    public async addOperationToQueue(req: Request, res: Response, dto: ConvertFileDto) {
        const file = await FilesModel.findOne({where: {filename: dto.fileName}});
        if (!file) {
          return res.status(400).json({result: 'File Not Found'});
        } else {
            let operation = await QueueModel.findOne({where: {filename: dto.fileName, convert_to: dto.convertTo}});
            if (operation) {
              return res.status(400).json({
                  result: {
                      message: 'File already converting',
                      operation_id: operation.operation_id,
                      status: operation.status,
                  },
              });
            }
            operation = await QueueModel.create({
                operation_id: uuidv4(),
                filename: dto.fileName,
                convert_to: dto.convertTo,
                status: 'pending',
            });
            return res.status(200).json({
                result: {
                    message: 'File added to queue',
                    operation_id: operation.operation_id,
                },
            });
        }
    }
}

export = new ConverterServices();
