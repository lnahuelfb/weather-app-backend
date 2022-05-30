"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const data = {
    city: 'Aldo Bonzi',
    temperature: '20° C',
    weather: 'rainy',
    humidity: '50%',
    wind: '10km/h'
};
router.get('/', (_req, res) => {
    res.send(data);
});
exports.default = router;
