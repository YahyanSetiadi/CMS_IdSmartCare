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
exports.BoInfos = void 0;
const bisnis_owner_entity_1 = require("../bisnis-owner/bisnis-owner.entity");
const history_bo_info_entity_1 = require("../history-bo-info/history-bo-info.entity");
const history_legal_doc_entity_1 = require("../history-legal-doc/history-legal-doc.entity");
const typeorm_1 = require("typeorm");
let BoInfos = class BoInfos {
};
exports.BoInfos = BoInfos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], BoInfos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], BoInfos.prototype, "bisnis_owner_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "businessId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "businessType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "businessName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "businessEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], BoInfos.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "subdistrict", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "village", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BoInfos.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], BoInfos.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BoInfos.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], BoInfos.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], BoInfos.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_bo_info_entity_1.HistoryBoInfo, (historyBoInfo) => historyBoInfo.boInfo),
    __metadata("design:type", Array)
], BoInfos.prototype, "historyBoInfos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bisnis_owner_entity_1.BisnisOwner, (bisnisOwner) => bisnisOwner.boInfos),
    (0, typeorm_1.JoinColumn)({ name: 'bisnis_owner_id' }),
    __metadata("design:type", bisnis_owner_entity_1.BisnisOwner)
], BoInfos.prototype, "bisnisOwner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_legal_doc_entity_1.HistoryLegalDoc, (historyLegalDoc) => historyLegalDoc.boInfo),
    __metadata("design:type", Array)
], BoInfos.prototype, "historyLegalDocs", void 0);
exports.BoInfos = BoInfos = __decorate([
    (0, typeorm_1.Entity)('bo_infos')
], BoInfos);
//# sourceMappingURL=bo-infos.entity.js.map