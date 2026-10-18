import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "PaymentMethods",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.CHAR(2),
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "PaymentMethods",
      timestamps: true,
      underscored: true,
    },
  );
};
