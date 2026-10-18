import { DataTypes } from "sequelize";

const MOVEMENT_TYPES = [
  "Compra",
  "Venta",
  "Ajuste entrada",
  "Ajuste salida",
  "Transferencia entrada",
  "Transferencia salida",
  "Devolución",
];

export default (sq) => {
  sq.define(
    "InventoryMovements",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      type: {
        type: DataTypes.ENUM,
        values: MOVEMENT_TYPES,
        allowNull: false,
      },

      quantity: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      unit_cost: {
        type: DataTypes.DECIMAL(14, 4),
        allowNull: false,
        defaultValue: 0,
      },

      source_type: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      source_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      business_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Businesses",
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
    },
    {
      tableName: "InventoryMovements",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ["business_id", "product_id"],
          name: "idx_mov_product",
        },
      ],
    },
  );
};
