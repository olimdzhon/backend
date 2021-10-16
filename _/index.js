"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var someResolver_1 = require("./resolver/someResolver");
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.get("/", someResolver_1.resolve);
app.listen(port, function () { return console.log("Server running on port 3000"); });
