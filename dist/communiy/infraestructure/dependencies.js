"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommunityController = exports.createCommunityUseCase = exports.communityRepositoryImpl = void 0;
const communityRepositoryImpl_1 = require("./repositories/communityRepositoryImpl");
const createCommunityUseCase_1 = require("../application/createCommunityUseCase");
const createCommunityController_1 = require("./controllers/createCommunityController");
exports.communityRepositoryImpl = new communityRepositoryImpl_1.CommunityRepositoryImpl();
exports.createCommunityUseCase = new createCommunityUseCase_1.CreateCommunityUseCase(exports.communityRepositoryImpl);
exports.createCommunityController = new createCommunityController_1.CreateCommunityController(exports.createCommunityUseCase);
