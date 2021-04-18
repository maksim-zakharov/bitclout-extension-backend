"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HotelEntity = void 0;
var typeorm_1 = require("typeorm");
var staff_member_entity_1 = require("./staff-member.entity");
var HotelEntity = /** @class */ (function (_super) {
    __extends(HotelEntity, _super);
    function HotelEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryColumn({
            type: 'uuid'
        })
    ], HotelEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({
            unique: true,
            type: 'varchar'
        })
    ], HotelEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({
            unique: true,
            type: 'varchar'
        })
    ], HotelEntity.prototype, "website");
    __decorate([
        typeorm_1.Column({
            type: 'varchar'
        })
    ], HotelEntity.prototype, "governorate");
    __decorate([
        typeorm_1.Column({
            type: 'varchar'
        })
    ], HotelEntity.prototype, "city");
    __decorate([
        typeorm_1.Column({
            type: 'int'
        })
    ], HotelEntity.prototype, "rating");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "descriptionArabic");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "legalName");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "crNumber");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "crPerson");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "crDetails");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "signatoryName");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "signatoryPhoneNumber");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "signatoryEmail");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "bankName");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "branch");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "accountNumber");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "focalName");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "focalEmail");
    __decorate([
        typeorm_1.Column({
            type: 'text'
        })
    ], HotelEntity.prototype, "focalPhoneNumber");
    __decorate([
        typeorm_1.OneToMany(function () { return staff_member_entity_1.StaffMemberEntity; }, function (v) { return v.hotel; })
    ], HotelEntity.prototype, "members");
    HotelEntity = __decorate([
        typeorm_1.Entity('hotels')
    ], HotelEntity);
    return HotelEntity;
}(typeorm_1.BaseEntity));
exports.HotelEntity = HotelEntity;
