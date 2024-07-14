import { CommunityRepositoryImpl } from "./repositories/communityRepositoryImpl";
import { CreateCommunityUseCase } from "../application/createCommunityUseCase";
import { CreateCommunityController } from "./controllers/createCommunityController";

export const communityRepositoryImpl = new CommunityRepositoryImpl();

export const createCommunityUseCase = new CreateCommunityUseCase(communityRepositoryImpl);
export const createCommunityController = new CreateCommunityController(createCommunityUseCase);