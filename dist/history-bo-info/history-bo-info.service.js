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
exports.HistoryBoInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const history_bo_info_entity_1 = require("./history-bo-info.entity");
const typeorm_2 = require("typeorm");
let HistoryBoInfoService = class HistoryBoInfoService {
    constructor(historyBoInfoRepository) {
        this.historyBoInfoRepository = historyBoInfoRepository;
    }
    async findHistoryBoInfo(start_date, end_date, search = '', page = 1, limit = 5) {
        const queryBuilder = this.historyBoInfoRepository
            .createQueryBuilder('history_bo_info')
            .leftJoinAndSelect('history_bo_info.boInfo', 'bo_infos')
            .leftJoinAndSelect('bo_infos.bisnisOwner', 'bisnis_owners');
        if (start_date && end_date) {
            const startOfDay = new Date(start_date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(end_date);
            endOfDay.setHours(23, 59, 59, 999);
            queryBuilder.andWhere('history_bo_info.created_at BETWEEN :start AND :end', {
                start: startOfDay,
                end: endOfDay,
            });
        }
        if (search) {
            queryBuilder.andWhere('LOWER(history_bo_info.status) LIKE LOWER(:search) OR LOWER(history_bo_info.petugas) LIKE LOWER(:search) OR LOWER(bisnis_owners.name) LIKE LOWER(:search)', {
                search: `%${search.toLowerCase()}%`,
            });
        }
        const skip = (page - 1) * limit;
        queryBuilder.skip(skip).take(limit);
        const [result, total] = await queryBuilder
            .select([
            'history_bo_info.id',
            'history_bo_info.status',
            'history_bo_info.petugas',
            'history_bo_info.created_at',
            'bo_infos.businessName',
            'bisnis_owners.name',
        ])
            .getManyAndCount();
        return {
            data: result,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
};
exports.HistoryBoInfoService = HistoryBoInfoService;
exports.HistoryBoInfoService = HistoryBoInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_bo_info_entity_1.HistoryBoInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HistoryBoInfoService);
//# sourceMappingURL=history-bo-info.service.js.map