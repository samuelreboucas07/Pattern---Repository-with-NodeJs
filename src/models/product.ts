import { model, Schema, Document } from "mongoose";

export interface IProduct {
    name: string;
    value: string;
}

export interface IProductModel extends IProduct, Document { 
    createdAt: Date;
    updatedAt: Date;
};

const ProductSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
},
    { timestamps: true }
);

export default model<Document>('Product', ProductSchema);