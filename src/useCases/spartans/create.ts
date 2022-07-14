import SpartanRepository from "./../../repositories/spartan";
import { ISpartanModel } from "../../models/spartan";

const create = async (item: ISpartanModel) => {
    const repository = new SpartanRepository();
    const result = await repository.create(item);

    if (result) return true;
    return false;
};

export default create;
