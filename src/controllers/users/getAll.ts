import { Request, Response } from 'express';
import useCases from '../../useCases/users';

const getAll = async (request: Request, response: Response) => {
    try {
        const result = await useCases.find();
        response.status(200).json(result);
    } catch (err) {
        response.status(404).json({ message: 'get all user error.' })
    }
};

export default getAll;