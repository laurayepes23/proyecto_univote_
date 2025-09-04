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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectionsController = void 0;
const common_1 = require("@nestjs/common");
const elections_service_1 = require("./elections.service");
const create_election_dto_1 = require("./dto/create-election.dto");
const update_election_dto_1 = require("./dto/update-election.dto");
let ElectionsController = class ElectionsController {
    electionsService;
    constructor(electionsService) {
        this.electionsService = electionsService;
    }
    create(createElectionDto) {
        return this.electionsService.create(createElectionDto);
    }
    findAll() {
        return this.electionsService.findAll();
    }
    findOne(id) {
        return this.electionsService.findOne(+id);
    }
    update(id, updateElectionDto) {
        return this.electionsService.update(+id, updateElectionDto);
    }
    remove(id) {
        return this.electionsService.remove(+id);
    }
};
exports.ElectionsController = ElectionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_election_dto_1.CreateElectionDto]),
    __metadata("design:returntype", void 0)
], ElectionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElectionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElectionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_election_dto_1.UpdateElectionDto]),
    __metadata("design:returntype", void 0)
], ElectionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElectionsController.prototype, "remove", null);
exports.ElectionsController = ElectionsController = __decorate([
    (0, common_1.Controller)('elections'),
    __metadata("design:paramtypes", [elections_service_1.ElectionsService])
], ElectionsController);
//# sourceMappingURL=elections.controller.js.map