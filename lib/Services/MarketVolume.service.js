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
exports.marketVolume = () => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/market`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = data.map((o) => Object.assign(new MarketVolume(), o));
    return result;
});
class MarketVolume {
    constructor() {
        this.mic = "";
        this.tapeId = "";
        this.venueName = "";
        this.volume = 0;
        this.tapeA = 0;
        this.tapeB = 0;
        this.tapeC = 0;
        this.marketPercent = 0;
        this.lastUpdated = 0;
    }
}
exports.MarketVolume = MarketVolume;
