import { DataTypes, Model } from 'sequelize';
import syncDatabase from './model';
import { sequelize } from "../../../database/database";

export class CommunityModel extends Model {
    public code!: string;
    public name!: string;
    public id!: number;
}

CommunityModel.init({
    code: {
        type: DataTypes.STRING(128),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Community',
    tableName: 'communities',
    timestamps: false
});

// Llama a syncDatabase() para sincronizar las tablas al definir el modelo
syncDatabase().then(() => {
    console.log('Database synced successfully.');
}).catch(error => {
    console.error('Failed to sync database:', error);
});


export default CommunityModel;