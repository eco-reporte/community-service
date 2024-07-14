import { Community } from '../domain/community';
import { CommunityRepository } from '../domain/communityRepository';

export class GetByCodeCommunityUseCase {

    constructor(private repository: CommunityRepository) {}

    async getByCode(code: string): Promise<Community | null> {
        return await this.repository.getByCode(code);
    }
}