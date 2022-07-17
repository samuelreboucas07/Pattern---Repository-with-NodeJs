import UserRepository from "../../repositories/user";
import { IUserModel } from "../../models/user";

const create = async (item: IUserModel) => {
    const repository = new UserRepository();
    const result = await repository.create(item);

    if (result) return true;
    return false;
};

export default create;
