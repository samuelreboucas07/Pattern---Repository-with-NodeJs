import ProductRepository from "../../repositories/product";

const remove = async (id: string) => {
    const repository = new ProductRepository();
    const result = await repository.delete(id);

    if (result) return true;
    return false;
};

export default remove;
