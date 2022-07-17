import UserRepository from "../../repositories/user";

const find = async () => {
    const repository = new UserRepository();
    const result = await repository.find();
    return result;
};

export default find;
