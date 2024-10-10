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
exports.HistoryBoInfo = void 0;
const typeorm_1 = require("typeorm");
const bo_infos_entity_1 = require("../bo-infos/bo-infos.entity");
const bisnis_owner_entity_1 = require("../bisnis-owner/bisnis-owner.entity");
let HistoryBoInfo = class HistoryBoInfo {
};
exports.HistoryBoInfo = HistoryBoInfo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], HistoryBoInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bo_infos_entity_1.BoInfos, (boInfo) => boInfo.historyBoInfos),
    (0, typeorm_1.JoinColumn)({ name: 'bo_info_id' }),
    __metadata("design:type", bo_infos_entity_1.BoInfos)
], HistoryBoInfo.prototype, "boInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 155 }),
    __metadata("design:type", String)
], HistoryBoInfo.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HistoryBoInfo.prototype, "petugas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], HistoryBoInfo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], HistoryBoInfo.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bisnis_owner_entity_1.BisnisOwner, (bisnisOwner) => bisnisOwner.historyBoInfos),
    (0, typeorm_1.JoinColumn)({ name: 'bisnis_owner_id' }),
    __metadata("design:type", bisnis_owner_entity_1.BisnisOwner)
], HistoryBoInfo.prototype, "bisnisOwner", void 0);
exports.HistoryBoInfo = HistoryBoInfo = __decorate([
    (0, typeorm_1.Entity)('history_bo_info')
], HistoryBoInfo);
//# sourceMappingURL=history-bo-info.entity.js.map