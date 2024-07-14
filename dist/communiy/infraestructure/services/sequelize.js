"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityModel = void 0;
const sequelize_1 = require("sequelize");
const model_1 = __importDefault(require("./model"));
const database_1 = require("../../../database/database");
class CommunityModel extends sequelize_1.Model {
}
exports.CommunityModel = CommunityModel;
CommunityModel.init({
    code: {
        type: sequelize_1.DataTypes.STRING(128),
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    modelName: 'Community',
    tableName: 'communities',
    timestamps: false
});
// Llama a syncDatabase() para sincronizar las tablas al definir el modelo
(0, model_1.default)().then(() => {
    console.log('Database synced successfully.');
}).catch(error => {
    console.error('Failed to sync database:', error);
});
exports.default = CommunityModel;
