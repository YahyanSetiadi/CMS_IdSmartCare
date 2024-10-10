"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryBoInfoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const history_bo_info_entity_1 = require("./history-bo-info.entity");
const bo_infos_entity_1 = require("../bo-infos/bo-infos.entity");
const history_bo_info_controller_1 = require("./history-bo-info.controller");
const history_bo_info_service_1 = require("./history-bo-info.service");
let HistoryBoInfoModule = class HistoryBoInfoModule {
};
exports.HistoryBoInfoModule = HistoryBoInfoModule;
exports.HistoryBoInfoModule = HistoryBoInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([history_bo_info_entity_1.HistoryBoInfo, bo_infos_entity_1.BoInfos])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [history_bo_info_controller_1.HistoryBoInfoController],
        providers: [history_bo_info_service_1.HistoryBoInfoService]
    })
], HistoryBoInfoModule);
//# sourceMappingURL=history-bo-info.module.js.map