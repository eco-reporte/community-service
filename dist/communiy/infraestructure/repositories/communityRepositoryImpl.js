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
            try {
                // Verifica si ya existe un registro con el mismo código
                const existingCommunity = yield sequelize_1.CommunityModel.findOne({ where: { code: community.code.toString() } });
                if (existingCommunity) {
                    // Si ya existe, puedes decidir qué hacer, aquí devolvemos null para indicar que no se creó nada nuevo
                    return null;
                }
                // Si no existe, procede con la creación del nuevo registro
                const communityModel = yield sequelize_1.CommunityModel.create(Object.assign(Object.assign({}, community), { code: community.code.toString() }));
                // Retorna una nueva instancia de la clase Community con los datos guardados en la base de datos
                return new community_1.Community(communityModel.code.toString(), communityModel.name, communityModel.id);
            }
            catch (error) {
                // Maneja cualquier error que pueda ocurrir durante la creación
                console.error('Error al crear comunidad:', error);
                throw error; // Puedes manejar el error según tus necesidades específicas
            }
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
