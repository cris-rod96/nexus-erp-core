import { DataTypes } from "sequelize";

const STATUSES = ["Pendiente", "Parcial", "Pagada", "Anulada"];

export default (sq) => {
  sq.define(
    "Accounts",
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
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Cobrar", "Pagar"],
      },
      third_party_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "ThirdParties",
          key: "id",
        },
      },
      voucher_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Vouchers",
          key: "id",
        },
      },

      sale_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Sales",
          key: "id",
        },
      },
      issue_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      original_amount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
      balance: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: STATUSES,
        defaultValue: "Pendiente",
      },
    },
    {
      tableName: "Accounts",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ["business_id", "type", "status"],
          name: "idx_account_business_type_status",
        },
      ],
    },
  );
};
