import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "VoucherTypes",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
    },
    {
      tableName: "VoucherTypes",
      timestamps: true,
      underscored: true,
    },
  );
};
