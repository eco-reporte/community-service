"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityRepositoryImpl = void 0;
const community_1 = require("../../domain/community");
const sequelize_1 = require("../services/sequelize");
class CommunityRepositoryImpl {
    create(community) {
        return __awaiter(this, void 0, void 0, function* () {
            const communityModel = yield sequelize_1.CommunityModel.create(Object.assign(Object.assign({}, community), { code: community.code.toString() }));
            return new community_1.Community(communityModel.code.toString(), communityModel.name, communityModel.id);
        });
    }
    getByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const communityModel = yield sequelize_1.CommunityModel.findOne({
                where: {
                    code: code
                }
            });
            if (communityModel) {
                return new community_1.Community(communityModel.code.toString(), communityModel.name, communityModel.id);
            }
            else {
                // Instead of throwing an error, return null to indicate not found
                return null;
            }
        });
    }
}
exports.CommunityRepositoryImpl = CommunityRepositoryImpl;
