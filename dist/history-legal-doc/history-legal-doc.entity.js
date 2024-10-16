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
exports.HistoryLegalDoc = void 0;
const bisnis_owner_entity_1 = require("../bisnis-owner/bisnis-owner.entity");
const bo_infos_entity_1 = require("../bo-infos/bo-infos.entity");
const legal_dokumen_entity_1 = require("../legal-dokumen/legal-dokumen.entity");
const typeorm_1 = require("typeorm");
let HistoryLegalDoc = class HistoryLegalDoc {
};
exports.HistoryLegalDoc = HistoryLegalDoc;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HistoryLegalDoc.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'legal_doc_bo_id' }),
    __metadata("design:type", Number)
], HistoryLegalDoc.prototype, "legalDocBoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 155 }),
    __metadata("design:type", String)
], HistoryLegalDoc.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HistoryLegalDoc.prototype, "petugas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HistoryLegalDoc.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HistoryLegalDoc.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bo_infos_entity_1.BoInfos, (boInfos) => boInfos.historyLegalDocs),
    (0, typeorm_1.JoinColumn)({ name: 'legal_doc_bo_id' }),
    __metadata("design:type", bo_infos_entity_1.BoInfos)
], HistoryLegalDoc.prototype, "boInfo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bisnis_owner_entity_1.BisnisOwner, (bisnisOwner) => bisnisOwner.historyLegalDocs),
    (0, typeorm_1.JoinColumn)({ name: 'legal_doc_bo_id' }),
    __metadata("design:type", bisnis_owner_entity_1.BisnisOwner)
], HistoryLegalDoc.prototype, "bisnisOwner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => legal_dokumen_entity_1.LegalDokumen, (legalDokumen) => legalDokumen.historyLegalDocs),
    (0, typeorm_1.JoinColumn)({ name: 'legal_doc_bo_id' }),
    __metadata("design:type", legal_dokumen_entity_1.LegalDokumen)
], HistoryLegalDoc.prototype, "legalDokumen", void 0);
exports.HistoryLegalDoc = HistoryLegalDoc = __decorate([
    (0, typeorm_1.Entity)('history_legal_doc')
], HistoryLegalDoc);
//# sourceMappingURL=history-legal-doc.entity.js.map