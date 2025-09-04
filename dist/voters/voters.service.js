"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotersService = void 0;
const common_1 = require("@nestjs/common");
let VotersService = class VotersService {
    voters = [
        {
            id: 1,
            name: "Juan",
            typeDoc: "CC",
            numberDoc: 1234567891,
            career: "Ingenieria en sistema"
        },
        {
            id: 2,
            name: "Pablo",
            typeDoc: "CC",
            numberDoc: 1365432345,
            career: "ingenieria quimica"
        }
    ];
    findAll() {
        return this.voters;
    }
    create(body) {
        this.voters.push(body);
        return body;
    }
};
exports.VotersService = VotersService;
exports.VotersService = VotersService = __decorate([
    (0, common_1.Injectable)()
], VotersService);
//# sourceMappingURL=voters.service.js.map