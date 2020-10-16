"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserService = void 0;
const response_1 = require("./../model/response");
class ParserService {
    static parse(req) {
        if (req && typeof req === 'string' && req.length > 18) {
            const res = new response_1.Respose();
            res.firstName = req.substring(0, 8);
            res.lastName = req.substring(8, 18);
            res.clientId = req.substring(18);
            return res;
        }
        else {
            throw new Error("Invalid Input String");
        }
    }
}
exports.ParserService = ParserService;
