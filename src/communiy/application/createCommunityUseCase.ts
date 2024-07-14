import { Community } from '../domain/community';
import { CommunityRepository } from '../domain/communityRepository';

export class CreateCommunityUseCase {

    constructor(private repository: CommunityRepository) {}

    async createCommunity(code: string, name: string, id: number): Promise<Community | null> {
        const community = new Community(code, name, id);
        return await this.repository.create(community);
    }
}