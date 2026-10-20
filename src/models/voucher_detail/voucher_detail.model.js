import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "VoucherDetails",
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
      product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
      },

      warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Warehouses",
          key: "id",
        },
      },

      batch_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Batches",
          key: "id",
        },
      },

      main_code: {
        type: DataTypes.STRING(40),
      },

      note: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },

      quantity: {
        type: DataTypes.DECIMAL(14, 6),
        allowNull: false,
      },

      unit_price: {
        type: DataTypes.DECIMAL(14, 6),
        allowNull: false,
      },

      discount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },

      subtotal: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },

      tax_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Taxes",
          key: "id",
        },
      },

      rate: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
      },

      tax_amount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },

      unit_cost: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "VoucherDetails",
      timestamps: true,
      underscored: true,
    },
  );
};
