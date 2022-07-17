import { Model, Document } from "mongoose";
import IRead from "../../interfaces/generic/read";
import IWrite from "../../interfaces/generic/write";
export default abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    constructor(private readonly model: Model<Document>) { }

    async find(): Promise<T[]> {
        const result: Awaited<T[]> = await this.model.find();
        return result;
    }

    async findOne(id: string): Promise<T | null> {
        const result: Awaited<T | null> = await this.model.findById(id);
        return result;
    }

    async update(id: string, item: T): Promise<boolean> {
        const result = await this.model.findByIdAndUpdate(id, item);
        return !!result;
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id);
        return !!result;
    }
    
    async create(item: T): Promise<boolean> {
        const result = await this.model.create(item);
        return !!result;
    };
}