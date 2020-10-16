import { Respose } from "./../model/response";


export class ParserService
{
     static parse(req: any): any {
        if(req && typeof req === 'string' && req.length > 18){
            const res  = new Respose();
            res.firstName =req.substring(0,8);
            res.lastName =req.substring(8,18);
            res.clientId =req.substring(18);
            return res;
        }else{
            throw new Error("Invalid Input String");
        }
    }
}