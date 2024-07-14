// src/database/sync.js
import { sequelize } from "../../../database/database";

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false }); // force: true para recrear las tablas
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to create tables:', error);
    }
};

export default syncDatabase;