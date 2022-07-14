import { model, Schema, Document } from "mongoose";

export interface ISpartan {
    name: string;
    kills: number;
}

export interface ISpartanModel extends ISpartan, Document { };

const SpartanSchema = new Schema({
    name: { type: String, required: true },
    kills: { type: Number, required: true },

});

export default model<Document>('Spartan', SpartanSchema);