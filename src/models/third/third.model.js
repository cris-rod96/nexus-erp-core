import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "ThirdParties",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      identification: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },

      trade_name: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      is_customer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_supplier: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(300),
        allowNull: true,
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
      identification_type_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: "ThirdParties",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["group_id", "identification_type_id", "identification"],
          name: "uq_thirds_parties_group_type_identification_identification",
        },
      ],
    },
  );
};
