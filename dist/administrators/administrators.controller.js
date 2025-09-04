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
exports.AdministratorsController = void 0;
const common_1 = require("@nestjs/common");
const administrators_servicie_1 = require("./administrators.servicie");
let AdministratorsController = class AdministratorsController {
    administratorsService;
    constructor(administratorsService) {
        this.administratorsService = administratorsService;
    }
    create(body) {
        return this.administratorsService.create(body);
    }
    findAll() {
        return this.administratorsService.findAll();
    }
    findOne(id) {
        return this.administratorsService.findOne(+id);
    }
    update(id) {
        return "Aqui se actualizará el administrator con id: " + id;
    }
    remove(id) {
        return {
            "success": true,
            "mensaje": this.administratorsService.remove(+id)
        };
    }
};
exports.AdministratorsController = AdministratorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "remove", null);
exports.AdministratorsController = AdministratorsController = __decorate([
    (0, common_1.Controller)('administrators'),
    __metadata("design:paramtypes", [administrators_servicie_1.AdministratorsService])
], AdministratorsController);
//# sourceMappingURL=administrators.controller.js.map