import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Stock",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Warehouses",
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
      quantity: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "Stock",
      timestamps: true,
      underscored: true,
    },
  );
};
