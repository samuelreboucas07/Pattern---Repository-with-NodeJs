import { Request, Response } from "express";
import useCases from '../../useCases/products';

const update = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const result = await useCases.update(id, request.body);
        response.status(200).json(result);
    } catch (err) {
        response.status(404).json({ message: 'Update product error.' });
    }
};

export default update;