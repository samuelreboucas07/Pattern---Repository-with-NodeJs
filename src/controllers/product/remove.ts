import { Request, Response } from "express";
import useCases from '../../useCases/products';

const remove = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const result = await useCases.remove(id);
        response.status(200).json(result);
    } catch (err) {
        response.status(404).json({ message: 'Delete product error.' });
    }
};

export default remove;