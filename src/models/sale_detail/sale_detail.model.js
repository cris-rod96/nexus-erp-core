import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "SaleDetails",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      sale_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Sales",
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
      batch_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Batches",
          key: "id",
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
      },
      unit_cost: {
        type: DataTypes.DECIMAL(14, 4),
        allowNull: false,
      },
      discount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      tax_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Taxes",
          key: "id",
        },
      },
      tax_value: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      subtotal: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
    },
    {
      tableName: "SaleDetails",
      timestamps: true,
      underscored: true,
    },
  );
};
