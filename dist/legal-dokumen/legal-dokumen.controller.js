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
exports.LegalDokumenController = void 0;
const common_1 = require("@nestjs/common");
const legal_dokumen_service_1 = require("./legal-dokumen.service");
const jwt_auth_guard_1 = require("../access-console/guards/jwt-auth.guard");
let LegalDokumenController = class LegalDokumenController {
    constructor(legalDokumenService) {
        this.legalDokumenService = legalDokumenService;
    }
    async findAll() {
        return this.legalDokumenService.findAll();
    }
    async findOne(id) {
        return await this.legalDokumenService.findOne(id);
    }
    async updateStatus(id, status, reason, petugas) {
        if (['pending', 'rejected'].includes(status) && !reason) {
            throw new common_1.BadRequestException('Alasan wajib diisi.');
        }
        return this.legalDokumenService.updateStatus(id, status, reason, petugas);
    }
};
exports.LegalDokumenController = LegalDokumenController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LegalDokumenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LegalDokumenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, common_1.Body)('reason')),
    __param(3, (0, common_1.Body)('petugas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", Promise)
], LegalDokumenController.prototype, "updateStatus", null);
exports.LegalDokumenController = LegalDokumenController = __decorate([
    (0, common_1.Controller)('legal-dokumen'),
    __metadata("design:paramtypes", [legal_dokumen_service_1.LegalDokumenService])
], LegalDokumenController);
//# sourceMappingURL=legal-dokumen.controller.js.map