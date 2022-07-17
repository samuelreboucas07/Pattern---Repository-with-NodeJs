import { Request, Response } from "express";
import useCases from '../../useCases/products';

const create = async (request: Request, response: Response) => {
    try {
        const result = await useCases.create(request.body);
        response.status(201).json(result);
    } catch (err) {
        response.status(404).json({ message: 'Create product error.' });
    }
};

export default create;