"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentHistory = void 0;
function getPaymentHistory(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            response.json([
                {
                    id: "9d13fad5-f778-4b26-9885-381c08ce7dbf",
                    name: "Internet",
                    to: "Megafon",
                    from: "Sadykov",
                    cost: "-$470.00",
                    date: "1 Oct 2021",
                },
                {
                    id: "97ddc79a-1ede-40a6-a031-9e5477e48e8f",
                    name: "The salary",
                    to: "Sadykov",
                    from: "Megafon",
                    cost: "$2000.00",
                    date: "3 Oct 2021",
                },
                {
                    id: "a7ae8bd2-f699-45e8-a498-b4d35cf024c7",
                    name: "Movies",
                    to: "Kayhon",
                    from: "Sadykov",
                    cost: "-$120.00",
                    date: "13 Oct 2021",
                },
                {
                    id: "e8f0c80f-3c67-49ce-ae7d-0429c79acd0c",
                    name: "Games",
                    to: "Steam",
                    from: "Sadykov",
                    cost: "-$90.00",
                    date: "15 Oct 2021",
                },
                {
                    id: "4fd8c233-9a4e-43ee-af5c-cea5c2fd13e4",
                    name: "Electricity",
                    to: "Barqi Tojik",
                    from: "Sadykov",
                    cost: "-$340.00",
                    date: "18 Oct 2021",
                },
                {
                    id: "ef227477-146f-440f-9df9-f49542da49c6",
                    name: "Birthday gift",
                    to: "Sadykov",
                    from: "Hamraev",
                    cost: "$500.00",
                    date: "18 Oct 2021",
                },
            ]);
            return [2 /*return*/];
        });
    });
}
exports.getPaymentHistory = getPaymentHistory;
