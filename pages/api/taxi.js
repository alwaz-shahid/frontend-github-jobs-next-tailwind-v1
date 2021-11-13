import { getTaxiData } from "../../utils/taxiAPI";

export default async function handler(req, res){
    res.status(200).json(await getTaxiData())
}