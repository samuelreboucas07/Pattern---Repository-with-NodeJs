import UserSchema, { IUser } from "../../models/user";
import BaseRepository from "../base";

export default class UserRepository extends BaseRepository<IUser> {
    constructor () {
        super(UserSchema);
    }
}
