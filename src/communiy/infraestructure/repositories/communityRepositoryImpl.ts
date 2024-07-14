import { Community } from '../../domain/community';
import { CommunityRepository } from '../../domain/communityRepository';
import { CommunityModel } from '../services/sequelize';

export class CommunityRepositoryImpl implements CommunityRepository {
    
    async create(community: Community): Promise<Community | null> {
        try {
            // Verifica si ya existe un registro con el mismo código
            const existingCommunity = await CommunityModel.findOne({ where: { code: community.code.toString() } });
            
            if (existingCommunity) {
                // Si ya existe, puedes decidir qué hacer, aquí devolvemos null para indicar que no se creó nada nuevo
                return null;
            }
    
            // Si no existe, procede con la creación del nuevo registro
            const communityModel = await CommunityModel.create({
                ...community,
                code: community.code.toString()
            });
    
            // Retorna una nueva instancia de la clase Community con los datos guardados en la base de datos
            return new Community(communityModel.code.toString(), communityModel.name, communityModel.id);
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir durante la creación
            console.error('Error al crear comunidad:', error);
            throw error; // Puedes manejar el error según tus necesidades específicas
        }
    }
    

        async getByCode(code: string): Promise<Community | null> {
            const communityModel = await CommunityModel.findOne({
                where: {
                    code: code
                }
            });
            if (communityModel) {
                return new Community(communityModel.code.toString(), communityModel.name, communityModel.id);
            } else {
                // Instead of throwing an error, return null to indicate not found
                return null;
            }
        }

}