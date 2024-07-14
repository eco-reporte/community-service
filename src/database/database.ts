import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_DATABASE || '',   // Nombre de la base de datos
  process.env.DB_USER || '',       // Nombre de usuario
  process.env.DB_PASSWORD || '',   // Contraseña
  {
    host: process.env.DB_HOST || '',  // Dirección del servidor
    port: Number(process.env.DB_PORT) || 0,  // Puerto
    dialect: 'mysql',  // Dialecto de la base de datos
    logging: false,    // Desactivar el registro de SQL en la consola
  }
);

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida con éxito.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

export { sequelize };
