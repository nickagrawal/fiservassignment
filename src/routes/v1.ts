import * as express from "express";
import {ParserService} from "./../services/parserService_v1";

export const register = ( app: express.Application ) => {
      app.post( "/api/v1/parse", ( req: any, res ) => {
        res.send(ParserService.parse(req.body.data));
    } );
}