import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Roles",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: "Roles",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["group_id", "name"],
          name: "uq_roles_group_name",
        },
      ],
    },
  );
};
