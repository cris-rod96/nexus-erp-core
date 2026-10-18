import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Products",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Groups",
          key: "id",
        },
      },

      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },

      code: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      barcode: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["Bien", "Servicio"],
        allowNull: false,
        defaultValue: "Bien",
      },
      measurement_unit_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "MeasurementUnits",
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
      manages_inventory: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      manages_batches: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      average_cost: {
        type: DataTypes.DECIMAL(14, 4),
        allowNull: false,
        defaultValue: 0,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "Products",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["group_id", "code"],
          name: "uq_products_group_code",
        },
        {
          fields: ["barcode"],
          name: "idx_products_barcode",
        },
      ],
    },
  );
};
