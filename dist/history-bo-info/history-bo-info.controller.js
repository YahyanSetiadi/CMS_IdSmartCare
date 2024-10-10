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
exports.HistoryBoInfoController = void 0;
const common_1 = require("@nestjs/common");
const history_bo_info_service_1 = require("./history-bo-info.service");
let HistoryBoInfoController = class HistoryBoInfoController {
    constructor(historyBoInfoService) {
        this.historyBoInfoService = historyBoInfoService;
    }
    async getAllHistoryBoInfo(start_date, end_date, search = '', page = 1, limit = 5) {
        return this.historyBoInfoService.findHistoryBoInfo(start_date, end_date, search, Number(page), Number(limit));
    }
};
exports.HistoryBoInfoController = HistoryBoInfoController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('start_date')),
    __param(1, (0, common_1.Query)('end_date')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], HistoryBoInfoController.prototype, "getAllHistoryBoInfo", null);
exports.HistoryBoInfoController = HistoryBoInfoController = __decorate([
    (0, common_1.Controller)('history-bo-info'),
    __metadata("design:paramtypes", [history_bo_info_service_1.HistoryBoInfoService])
], HistoryBoInfoController);
//# sourceMappingURL=history-bo-info.controller.js.map