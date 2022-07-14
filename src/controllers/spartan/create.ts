import { Request, Response } from "express";
import createSpartan from '../../useCases/spartans/create';

const create = async (request: Request, response: Response) => {
    try{
        const result = await createSpartan(request.body) 
        response.send(result);
    }catch(err){

    }
};

export default create;