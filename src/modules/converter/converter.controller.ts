import converterService from './converter.services';
import {Request, Response} from "express";
import { ConvertFileDto } from "./dto/convertFile.dto"

class ConverterController {
  ConvertFile(req: Request, res: Response) {
    const body: ConvertFileDto = req.body
    return converterService.addOperationToQueue(req, res, body);
  }
}

export = new ConverterController();
