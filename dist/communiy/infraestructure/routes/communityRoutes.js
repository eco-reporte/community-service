"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.communityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.communityRoutes = express_1.default.Router();
exports.communityRoutes.post('/create', (request, response) => {
    dependencies_1.createCommunityController.createCommunity(request, response);
});
