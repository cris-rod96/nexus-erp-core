import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "VoucherAdditionalInfos",
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

      name: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },

      value: {
        type: DataTypes.STRING(300),
        allowNull_: false,
      },
    },
    {
      tableName: "VoucherAdditionalInfos",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ["voucher_id"],
          name: "idx_voucher_additional_info_voucher",
        },
      ],
    },
  );
};
