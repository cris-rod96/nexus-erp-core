import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Businesses",
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
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM(),
        values: ["Comercio", "Taxi", "Servicios", "Otro"],
        allowNull: false,
      },
      manages_inventory: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      prices_include_tax: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      currency: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        defaultValue: "USD",
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      emitter_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: "Businesses",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["group_id", "code"],
          name: "uq_businesses_group_code",
        },
      ],
    },
  );
};
