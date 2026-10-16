import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "UserBusinesses",
    {
      user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      business_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
          model: "Businesses",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id",
        },
      },

      emission_point_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "EmissionPoints",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      tableName: "UserBusinesses",
      underscored: true,
    },
  );
};
