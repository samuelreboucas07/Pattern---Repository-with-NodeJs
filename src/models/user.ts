import { model, Schema, Document } from "mongoose";

export interface IUser {
    name: string;
    email: string;
}

export interface IUserModel extends IUser, Document { 
    createdAt: Date;
    updatedAt: Date;
};

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
},
    { timestamps: true }
);

export default model<Document>('User', UserSchema);