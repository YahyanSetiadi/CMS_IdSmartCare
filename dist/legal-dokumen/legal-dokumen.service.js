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
const history_legal_doc_entity_1 = require("../history-legal-doc/history-legal-doc.entity");
const notifications_entity_1 = require("../notification/notifications.entity");
let LegalDokumenService = class LegalDokumenService {
    constructor(legalDokumenRepository, historyLegalDocRepository, notificationsRepository) {
        this.legalDokumenRepository = legalDokumenRepository;
        this.historyLegalDocRepository = historyLegalDocRepository;
        this.notificationsRepository = notificationsRepository;
    }
    async updateStatus(id, newStatus, reason, petugas) {
        const legalDokumen = await this.legalDokumenRepository.findOne({
            where: { id },
        });
        if (!legalDokumen) {
            throw new common_1.NotFoundException(`Legal Dokumen dengan ID ${id} tidak ditemukan`);
        }
        legalDokumen.status = newStatus;
        legalDokumen.reason =
            (['pending', 'rejected'].includes(newStatus) ? reason : null) || null;
        await this.legalDokumenRepository.save(legalDokumen);
        const historyEntry = new history_legal_doc_entity_1.HistoryLegalDoc();
        historyEntry.legalDocBoId = legalDokumen.id;
        historyEntry.status = newStatus;
        historyEntry.petugas = petugas || 'NamaPetugas';
        historyEntry.created_at = new Date();
        historyEntry.updated_at = new Date();
        await this.historyLegalDocRepository.save(historyEntry);
        const notificationEntry = new notifications_entity_1.Notifications();
        notificationEntry.bisnisOwnerId = legalDokumen.bisnis_owner_id;
        notificationEntry.title = `Status Legal Dokumen ${legalDokumen.id} Diperbarui`;
        notificationEntry.massage = `Status baru: ${newStatus}${['pending', 'rejected'].includes(newStatus) ? `. Alasan: ${reason || 'Tidak ada'}` : ''}`;
        notificationEntry.is_read = false;
        notificationEntry.type = 'update';
        notificationEntry.path = `/legal-documents/${legalDokumen.id}`;
        await this.notificationsRepository.save(notificationEntry);
        const history = await this.historyLegalDocRepository
            .createQueryBuilder('history')
            .select(['history.id', 'history.legal_doc_bo_id', 'history.status', 'history.petugas', 'history.created_at', 'history.updated_at'])
            .where('history.legal_doc_bo_id = :id', { id })
            .getMany();
        legalDokumen.history = history;
        return { legalDokumen };
    }
    async findOne(id) {
        return await this.legalDokumenRepository.findOne({ where: { id } });
    }
    async findAll() {
        return this.legalDokumenRepository.find({ relations: ['bisnisOwner'] });
    }
};
exports.LegalDokumenService = LegalDokumenService;
exports.LegalDokumenService = LegalDokumenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(legal_dokumen_entity_1.LegalDokumen)),
    __param(1, (0, typeorm_1.InjectRepository)(history_legal_doc_entity_1.HistoryLegalDoc)),
    __param(2, (0, typeorm_1.InjectRepository)(notifications_entity_1.Notifications)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LegalDokumenService);
//# sourceMappingURL=legal-dokumen.service.js.map