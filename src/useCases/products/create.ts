import { IProductModel } from "../../models/product";
import ProductRepository from "../../repositories/product";

const create = async (item: IProductModel) => {
    const repository = new ProductRepository();
    const result = await repository.create(item);

    if (result) return true;
    return false;
};

export default create;
