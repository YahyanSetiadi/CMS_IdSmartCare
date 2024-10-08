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
exports.AccessFasyankes = void 0;
const fasyankes_entity_1 = require("../fasyankes/fasyankes.entity");
const typeorm_1 = require("typeorm");
let AccessFasyankes = class AccessFasyankes {
};
exports.AccessFasyankes = AccessFasyankes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AccessFasyankes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AccessFasyankes.prototype, "fasyankes_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AccessFasyankes.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AccessFasyankes.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', width: 1, default: 1 }),
    __metadata("design:type", Boolean)
], AccessFasyankes.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AccessFasyankes.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AccessFasyankes.prototype, "id_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: 'admin' }),
    __metadata("design:type", String)
], AccessFasyankes.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], AccessFasyankes.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], AccessFasyankes.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fasyankes_entity_1.Fasyankes, (fasyankes) => fasyankes.accessFasyankes),
    (0, typeorm_1.JoinColumn)({ name: 'fasyankes_id' }),
    __metadata("design:type", fasyankes_entity_1.Fasyankes)
], AccessFasyankes.prototype, "fasyankes", void 0);
exports.AccessFasyankes = AccessFasyankes = __decorate([
    (0, typeorm_1.Entity)('access_fasyankes')
], AccessFasyankes);
//# sourceMappingURL=access_fasyankes.entity.js.map