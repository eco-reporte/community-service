"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const communityRoutes_1 = require("./communiy/infraestructure/routes/communityRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/community', communityRoutes_1.communityRoutes);
const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});
