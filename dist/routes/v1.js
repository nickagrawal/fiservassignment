"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const parserService_v1_1 = require("./../services/parserService_v1");
exports.register = (app) => {
    app.post("/api/v1/parse", (req, res) => {
        res.send(parserService_v1_1.ParserService.parse(req.body.data));
    });
};
