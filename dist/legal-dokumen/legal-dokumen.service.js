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
exports.LegalDokumenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const legal_dokumen_entity_1 = require("./legal-dokumen.entity");
let LegalDokumenService = class LegalDokumenService {
    constructor(legalDokumenRepository) {
        this.legalDokumenRepository = legalDokumenRepository;
    }
    async findOne(id) {
        return await this.legalDokumenRepository.findOne({ where: { id } });
    }
    async updateStatus(id, newStatus, reason) {
        const LegalDokumen = await this.legalDokumenRepository.findOne({
            where: { id },
        });
        if (!LegalDokumen) {
            throw new common_1.NotFoundException(`legal Dokumen dengan ID ${id} tidak ditemukan`);
        }
        LegalDokumen.status = newStatus;
        if (['pending', 'rejected'].includes(newStatus)) {
            LegalDokumen.reason = reason;
        }
        else {
            LegalDokumen.reason = null;
        }
        return this.legalDokumenRepository.save(LegalDokumen);
    }
    async findAll() {
        return this.legalDokumenRepository.find({ relations: ['bisnisOwner'] });
    }
};
exports.LegalDokumenService = LegalDokumenService;
exports.LegalDokumenService = LegalDokumenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(legal_dokumen_entity_1.LegalDokumen)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LegalDokumenService);
//# sourceMappingURL=legal-dokumen.service.js.map