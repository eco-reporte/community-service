"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar las variables de entorno desde el archivo .env
dotenv_1.default.config();
// Configuración de la conexión a la base de datos
const sequelize = new sequelize_1.Sequelize(process.env.DB_DATABASE || '', // Nombre de la base de datos
process.env.DB_USER || '', // Nombre de usuario
process.env.DB_PASSWORD || '', // Contraseña
{
    host: process.env.DB_HOST || '', // Dirección del servidor
    port: Number(process.env.DB_PORT) || 0, // Puerto
    dialect: 'mysql', // Dialecto de la base de datos
    logging: false, // Desactivar el registro de SQL en la consola
});
exports.sequelize = sequelize;
// Probar la conexión
sequelize.authenticate()
    .then(() => {
    console.log('Conexión establecida con éxito.');
})
    .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
});
