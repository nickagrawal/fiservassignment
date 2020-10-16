"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const parserService_v2_1 = require("./../services/parserService_v2");
exports.register = (app) => {
    app.post("/api/v2/parse", (req, res) => {
        res.send(parserService_v2_1.ParserService.parse(req.body.data));
    });
};
