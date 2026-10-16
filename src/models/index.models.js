import BusinessesModel from "./business/business.model.js";
import DocumentSequenceModel from "./document_sequence/document_sequence.model.js";
import EmissionPointModel from "./emission_point/emission_point.model.js";
import EmmiterModel from "./emitter/emitter.model.js";
import EstablishmentModel from "./establishment/establishment.model.js";
import GroupModel from "./group/group.model.js";
import PermissionModel from "./permission/permission.model.js";
import RoleModel from "./role/role.model.js";
import RolePermissionModel from "./role_permission/role_permission.model.js";
import UserBusinessModel from "./user_business/user_business.model.js";
import UserModel from "./user/user.model.js";

export const models = [
  BusinessesModel,
  DocumentSequenceModel,
  EmissionPointModel,
  EmmiterModel,
  EstablishmentModel,
  GroupModel,
  PermissionModel,
  RoleModel,
  RolePermissionModel,
  UserBusinessModel,
  UserModel,
];
