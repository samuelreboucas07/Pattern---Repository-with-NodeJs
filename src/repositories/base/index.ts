import { Model, Document } from "mongoose";
import IRead from "../../interfaces/generic/read";
import IWrite from "../../interfaces/generic/write";

export default abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    constructor(private readonly model: Model<Document>){}

    find(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async create(item: T): Promise<boolean> {
        const result = await this.model.create(item);
        return !!result;
    };
}