import UserRepository from "../../repositories/user";

const findById = async (id: string) => {
    const repository = new UserRepository();
    const result = await repository.findOne(id);
    return result;
};

export default findById;
