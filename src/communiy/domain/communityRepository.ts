import { Community } from './community';

export interface CommunityRepository {
   create(community: Community): Promise<Community>;
}