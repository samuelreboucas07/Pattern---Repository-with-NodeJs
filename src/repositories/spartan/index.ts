import SpartanSchema, { ISpartanModel } from "../../models/spartan";
import BaseRepository from "../base";

export default class SpartanRepository extends BaseRepository<ISpartanModel> {
    constructor () {
        super(SpartanSchema);
    }
}
