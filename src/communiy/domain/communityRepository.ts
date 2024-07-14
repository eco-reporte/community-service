import { Community } from './community';

export interface CommunityRepository {
   create(community: Community): Promise<Community | null>;
   getByCode(code: string): Promise<Community | null>;
}