import { Request, Response } from "express";
import useCases from "../../useCases/users/index";

const getById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const result = await useCases.findById(id);
        response.status(200).json(result);
    } catch (err) {
        response.status(404).json({ message: 'Get by id user error.' });
    }
};

export default getById;