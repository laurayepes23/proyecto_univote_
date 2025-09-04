"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectionsService = void 0;
const common_1 = require("@nestjs/common");
const create_election_dto_1 = require("./dto/create-election.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let ElectionsService = class ElectionsService {
    repositorio;
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    create(createElectionDto) {
        return this.repositorio.elections.create({
            data: create_election_dto_1.CreateElectionDto
        });
    }
    findAll() {
        return `This action returns all elections`;
    }
    findOne(id) {
        return `This action returns a #${id} election`;
    }
    update(id, updateElectionDto) {
        return `This action updates a #${id} election`;
    }
    remove(id) {
        return `This action removes a #${id} election`;
    }
};
exports.ElectionsService = ElectionsService;
exports.ElectionsService = ElectionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ElectionsService);
//# sourceMappingURL=elections.service.js.map