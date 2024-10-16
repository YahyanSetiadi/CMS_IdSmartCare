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
exports.BoInfosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bo_infos_entity_1 = require("./bo-infos.entity");
const history_bo_info_entity_1 = require("../history-bo-info/history-bo-info.entity");
const notifications_entity_1 = require("../notification/notifications.entity");
let BoInfosService = class BoInfosService {
    constructor(boInfosRepository, historyBoInfoRepository, notificationsRepository) {
        this.boInfosRepository = boInfosRepository;
        this.historyBoInfoRepository = historyBoInfoRepository;
        this.notificationsRepository = notificationsRepository;
    }
    async findOne(id) {
        return await this.boInfosRepository.findOne({ where: { id } });
    }
    async updateStatus(id, newStatus, reason, petugas) {
        const boInfo = await this.boInfosRepository.findOne({
            where: { id },
        });
        if (!boInfo) {
            throw new common_1.NotFoundException(`BoInfos dengan ID ${id} tidak ditemukan`);
        }
        boInfo.status = newStatus;
        boInfo.reason =
            (['pending', 'rejected'].includes(newStatus) ? reason : null) || null;
        await this.boInfosRepository.save(boInfo);
        const historyEntry = new history_bo_info_entity_1.HistoryBoInfo();
        historyEntry.boInfoId = boInfo.id;
        historyEntry.status = newStatus;
        historyEntry.petugas = petugas || 'namaPetugas';
        const currentDateTime = new Date();
        historyEntry.created_at = currentDateTime;
        historyEntry.updated_at = currentDateTime;
        await this.historyBoInfoRepository.save(historyEntry);
        const notificationsEntry = new notifications_entity_1.Notifications();
        notificationsEntry.bisnisOwnerId = boInfo.bisnis_owner_id;
        notificationsEntry.title = `Status Bisnis Owners Info ${boInfo.id} Diperbarui`;
        notificationsEntry.massage = `Status baru: ${newStatus}${['pending', 'rejected'].includes(newStatus) ? `. Alasan: ${reason || 'Tidak ada'}` : ''}`;
        notificationsEntry.is_read = false;
        notificationsEntry.type = 'update';
        notificationsEntry.path = `/bo-infos/${boInfo.id}`;
        await this.notificationsRepository.save(notificationsEntry);
        const history = await this.historyBoInfoRepository
            .createQueryBuilder('history')
            .select([
            'history.id',
            'history.boInfoId',
            'history.status',
            'history.petugas',
            'history.created_at',
            'history.updated_at',
        ])
            .where('history.boInfoId = :id', { id: boInfo.id })
            .getMany();
        boInfo.history = history;
        return { boInfo };
    }
    async findAll() {
        return this.boInfosRepository.find({ relations: ['bisnisOwner'] });
    }
};
exports.BoInfosService = BoInfosService;
exports.BoInfosService = BoInfosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bo_infos_entity_1.BoInfos)),
    __param(1, (0, typeorm_1.InjectRepository)(history_bo_info_entity_1.HistoryBoInfo)),
    __param(2, (0, typeorm_1.InjectRepository)(notifications_entity_1.Notifications)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BoInfosService);
//# sourceMappingURL=bo-infos.service.js.map