import { IProductModel } from "../../models/product";
import ProductRepository from "../../repositories/product";

const update = async (id: string, item: IProductModel) => {
    const repository = new ProductRepository();
    const result = await repository.update(id, item);

    if (result) return true;
    return false;
};

export default update;
