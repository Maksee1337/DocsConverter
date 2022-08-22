import { QueueModel } from "../models/queue.model"
const delay = (time: number) => new Promise(res=>setTimeout(res,time));

export class Converter {
    //todo singleton
    public async run() {
        while (1) {
            const operation: QueueModel = await QueueModel.findOne({where: {status: ['pending', 'converting']}, order: ['id']});
            if (operation !== null) {
                await this.convert(operation);
            }
            await delay(1000);
        }
    }
    private async convert (operation: QueueModel) {
        console.log(`Converting ${operation.id}`);
        await operation.update({status: 'converting'});
        //todo converting
        await delay(5000);
        await operation.update({status: 'converted'});
    }
}
