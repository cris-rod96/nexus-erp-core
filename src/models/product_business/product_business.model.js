import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "ProductBusinesses",
    {
      product_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
      },
      business_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Businesses",
          key: "id",
        },
      },
      sale_price: {
        type: DataTypes.DECIMAL(14, 4),
        allowNull: false,
        defaultValue: 0,
      },
      minimum_price: {
        type: DataTypes.DECIMAL(14, 4),
        allowNull: true,
      },
      minimum_stock: {
        type: DataTypes.DECIMAL(14, 3),
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
      tableName: "ProductBusinesses",
      timestamps: true,
      underscored: true,
    },
  );
};
