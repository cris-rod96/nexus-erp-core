import BusinessesModel from "./business/business.model.js";
import CategoryModel from "./category/category.model.js";
import DocumentSequenceModel from "./document_sequence/document_sequence.model.js";
import EmissionPointModel from "./emission_point/emission_point.model.js";
import EmmiterModel from "./emitter/emitter.model.js";
import EstablishmentModel from "./establishment/establishment.model.js";
import GroupModel from "./group/group.model.js";
import IdentificationTypeModel from "./identification_type/identification_type.model.js";
import MeasurementUnitModel from "./measurement_unit/measurement_unit.model.js";
import PaymentMethodModel from "./payment_method/payment_method.model.js";
import PermissionModel from "./permission/permission.model.js";
import ProductModel from "./product/product.model.js";
import RoleModel from "./role/role.model.js";
import RolePermissionModel from "./role_permission/role_permission.model.js";
import TaxModel from "./tax/tax.model.js";
import ThirdPartyModel from "./third/third.model.js";
import ThirdPartyBusinessModel from "./third_party_business/third_party_business.model.js";
import UserBusinessModel from "./user_business/user_business.model.js";
import UserModel from "./user/user.model.js";
import VoucherType from "./voucher_type/voucher_type.model.js";

export const models = [
  BusinessesModel,
  CategoryModel,
  DocumentSequenceModel,
  EmissionPointModel,
  EmmiterModel,
  EstablishmentModel,
  GroupModel,
  IdentificationTypeModel,
  MeasurementUnitModel,
  PaymentMethodModel,
  PermissionModel,
  ProductModel,
  RoleModel,
  RolePermissionModel,
  TaxModel,
  ThirdPartyBusinessModel,
  ThirdPartyModel,
  UserBusinessModel,
  UserModel,
  VoucherType,
];
