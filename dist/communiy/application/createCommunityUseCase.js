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
exports.CreateCommunityUseCase = void 0;
const community_1 = require("../domain/community");
class CreateCommunityUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    createCommunity(code, name, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const community = new community_1.Community(code, name, id);
            return yield this.repository.create(community);
        });
    }
}
exports.CreateCommunityUseCase = CreateCommunityUseCase;
