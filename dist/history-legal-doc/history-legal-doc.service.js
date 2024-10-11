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
exports.HistoryLegalDocService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const history_legal_doc_entity_1 = require("./history-legal-doc.entity");
const typeorm_2 = require("typeorm");
const class_transformer_1 = require("class-transformer");
let HistoryLegalDocService = class HistoryLegalDocService {
    constructor(historyLegalDocRepository) {
        this.historyLegalDocRepository = historyLegalDocRepository;
    }
    async findHistoryLegalDoc(start_date, end_date, search = '', page = 1, limit = 5) {
        const queryBuilder = this.historyLegalDocRepository
            .createQueryBuilder('history_legal_doc')
            .leftJoinAndSelect('history_legal_doc.boInfo', 'boInfo')
            .leftJoinAndSelect('boInfo.bisnisOwner', 'bisnisOwner');
        const statusMapping = {
            disetujui: 'approved',
            ditolak: 'rejected',
            perbaikan: 'pending',
            terdaftar: 'apply',
            ditinjau: 'on review'
        };
        const lowerSearch = search.toLowerCase();
        const mappedSearch = statusMapping[lowerSearch] || lowerSearch;
        if (start_date && end_date) {
            const startOfDay = new Date(start_date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(end_date);
            endOfDay.setHours(23, 59, 59, 999);
            queryBuilder.andWhere('history_legal_doc.created_at BETWEEN :startOfDay AND :endOfDay', {
                startOfDay,
                endOfDay,
            });
        }
        if (search) {
            queryBuilder.andWhere('LOWER(history_legal_doc.status) LIKE LOWER(:mappedSearch) OR LOWER(history_legal_doc.petugas) LIKE LOWER(:search) OR LOWER(bisnisOwner.name) LIKE LOWER(:search)', {
                mappedSearch: `%${mappedSearch}%`,
                search: `%${search.toLowerCase()}%`,
            });
        }
        const skip = (page - 1) * limit;
        queryBuilder.skip(skip).take(limit);
        const [items, total] = await queryBuilder
            .select([
            'history_legal_doc.id',
            'history_legal_doc.status',
            'history_legal_doc.petugas',
            'history_legal_doc.created_at',
            'boInfo.businessName',
            'bisnisOwner.name',
        ])
            .getManyAndCount();
        const results = {
            data: (0, class_transformer_1.instanceToPlain)(items),
            totalItems: total,
            curentPage: page,
            totalPages: Math.ceil(total / limit),
        };
        return results;
    }
};
exports.HistoryLegalDocService = HistoryLegalDocService;
exports.HistoryLegalDocService = HistoryLegalDocService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_legal_doc_entity_1.HistoryLegalDoc)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HistoryLegalDocService);
//# sourceMappingURL=history-legal-doc.service.js.map