import ProductSchema, { IProduct } from "../../models/product";
import BaseRepository from "../base";

export default class ProductRepository extends BaseRepository<IProduct> {
    constructor(){
        super(ProductSchema)
    }
}