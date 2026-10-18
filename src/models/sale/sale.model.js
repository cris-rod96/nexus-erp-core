import { DataTypes, Sequelize } from "sequelize";

export default (sq) => {
  new Sequelize().define(
    "Sales",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      business_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Businesses",
          key: "id",
        },
      },
      supplier_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "ThirdParties",
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

      document_type: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "DocumentSequences",
          key: "id",
        },
      },

      document_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      authorization: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },

      issue_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Sales",
      timestamps: true,
      underscored: true,
    },
  );
};
