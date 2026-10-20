import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "TaxVouchers",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDv4,
      },
      voucher_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Vouchers",
          key: "id",
        },
      },

      tax_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Taxes",
          key: "id",
        },
      },

      taxable_base: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
    },
    {
      tableName: "TaxVouchers",
      timestamps: true,
      underscored: true,
    },
  );
};
