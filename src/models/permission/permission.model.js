import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Permissions",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "Permissions",
      underscored: true,
    },
  );
};
