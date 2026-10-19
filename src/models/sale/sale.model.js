import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
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
      entry_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      payment_term: {
        type: DataTypes.ENUM,
        values: ["Contado", "Crédito"],
        defaultValue: "Contado",
      },
      subtotal: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      discount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      iva_total: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      total: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Borrador", "Registrada", "Anulada"],
        allowNull: false,
        defaultValue: "Registrada",
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      tableName: "Sales",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["business_id", "supplier_id", "document_number"],
          name: "uq_sale_business_supplier_document",
        },
      ],
    },
  );
};
