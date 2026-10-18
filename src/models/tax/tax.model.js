import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Taxes",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.ENUM,
        values: ["2", "3", "5"],
        allowNull: false,
      },
      percentage_code: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },

      rate: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "Taxes",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["code", "percentage_code"],
          name: "uq_taxes_code_percentage_code",
        },
      ],
    },
  );
};
