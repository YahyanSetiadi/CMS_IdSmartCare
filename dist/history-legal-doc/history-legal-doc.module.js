"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryLegalDocModule = void 0;
const common_1 = require("@nestjs/common");
const history_legal_doc_service_1 = require("./history-legal-doc.service");
const typeorm_1 = require("@nestjs/typeorm");
const history_legal_doc_entity_1 = require("./history-legal-doc.entity");
const history_legal_doc_controller_1 = require("./history-legal-doc.controller");
let HistoryLegalDocModule = class HistoryLegalDocModule {
};
exports.HistoryLegalDocModule = HistoryLegalDocModule;
exports.HistoryLegalDocModule = HistoryLegalDocModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([history_legal_doc_entity_1.HistoryLegalDoc])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [history_legal_doc_controller_1.HitoryLegalDocController],
        providers: [history_legal_doc_service_1.HistoryLegalDocService],
    })
], HistoryLegalDocModule);
//# sourceMappingURL=history-legal-doc.module.js.map