"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var someResolver_1 = require("./resolver/someResolver");
var servicesResolver_1 = require("./resolver/servicesResolver");
var paymentResolver_1 = require("./resolver/paymentResolver");
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
var assetsPath = process.env.ASSETS_PATH || "../assets/images";
app.use("/assets/images", express_1.default.static(path.resolve(__dirname + "/" + assetsPath)));
app.get("/", someResolver_1.resolve);
app.get("/getServices", servicesResolver_1.getServices);
app.get("/getPaymentHistory", paymentResolver_1.getPaymentHistory);
app.listen(port, function () { return console.log("Server running on port 3000"); });
