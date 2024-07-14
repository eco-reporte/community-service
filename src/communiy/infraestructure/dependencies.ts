import { CommunityRepositoryImpl } from "./repositories/communityRepositoryImpl";
import { CreateCommunityUseCase } from "../application/createCommunityUseCase";
import { CreateCommunityController } from "./controllers/createCommunityController";
import { GetByCodeCommunityUseCase } from "../application/getByCodeCommunityUseCase";
import { GetByCodeCommunityController } from "./controllers/getByCodeCommunityController";

export const communityRepositoryImpl = new CommunityRepositoryImpl();

export const createCommunityUseCase = new CreateCommunityUseCase(communityRepositoryImpl);
export const createCommunityController = new CreateCommunityController(createCommunityUseCase);

export const getByCodeCommunityUseCase = new GetByCodeCommunityUseCase(communityRepositoryImpl);
export const getByCodeCommunityController = new GetByCodeCommunityController(getByCodeCommunityUseCase);