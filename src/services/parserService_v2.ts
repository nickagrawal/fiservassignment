import { Respose } from "./../model/response";


export class ParserService
{
     static parse(req: any): any {
        if(req && typeof req === 'string' && req.length > 21){
            const res  = new Respose();
            res.firstName =req.substring(0,8).replace(/^0+|0+$/g, "");
            res.lastName =req.substring(8,18).replace(/^0+|0+$/g, "");
            res.clientId =req.substring(18,21) +"-"+req.substring(21) ;
            return res;
        }else{
            throw "Invalid Input String";
        }
    }
}