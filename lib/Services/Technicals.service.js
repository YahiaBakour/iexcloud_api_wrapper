"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const iexcloud_service_1 = require("./iexcloud.service");
exports.technicals = (symbol,indicator,range,inputs) => __awaiter(this, void 0, void 0, function* () {
    var additions="";
    for(var input in inputs){
        additions += ("&" + input.toString() + "=" + inputs[input].toString())
    }
    const endpoint = `/stock/${symbol}/indicator/${indicator}?range=${range}` + additions;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    return data.indicator;
});


