import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "RolePermissions",
    {
      role_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: { model: "Roles", key: "id" },
        onDelete: "CASCADE",
      },
      permission_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: { model: "Permissions", key: "id" },
        onDelete: "CASCADE",
      },
    },
    {
      tableName: "RolePermissions",
      timestamps: false,
      underscored: true,
    },
  );
};
