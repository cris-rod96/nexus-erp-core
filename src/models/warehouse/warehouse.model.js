import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Warehouses",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      business_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Businesses",
          key: "id",
        },
      },
    },
    {
      tableName: "Warehouses",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["business_id", "code"],
          name: "uq_warehouse_business_code",
        },
      ],
    },
  );
};
