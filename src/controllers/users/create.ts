import { Request, Response } from "express";
import useCases from '../../useCases/users';

const create = async (request: Request, response: Response) => {
    try {
        const result = await useCases.create(request.body);
        response.status(201).json(result);
    } catch (err) {
        response.status(404).json({ message: 'Create user error.' });
    }
};

export default create;