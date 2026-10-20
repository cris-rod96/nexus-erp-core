import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "VocuherPayments",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      voucher_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Vouchers",
          key: "id",
        },
      },

      payment_method_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "PaymentMethods",
          key: "id",
        },
      },
      amount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },

      term: {
        type: DataTypes.SMALLINT,
      },
      time_unit: {
        type: DataTypes.STRING(10),
      },
    },
    {
      tableName: "VoucherPayments",
      timestamps: true,
      underscored: true,
    },
  );
};
