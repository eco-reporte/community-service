import { Community } from '../../domain/community';
import { CommunityRepository } from '../../domain/communityRepository';
import { CommunityModel } from '../services/sequelize';

export class CommunityRepositoryImpl implements CommunityRepository {
    
        async create(community: Community): Promise<Community> {
            const communityModel = await CommunityModel.create({
                ...community,
                code: community.code.toString()
            });
            return new Community(communityModel.code.toString(), communityModel.name, communityModel.id);
        }
        
}