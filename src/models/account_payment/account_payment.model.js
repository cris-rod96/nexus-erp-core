import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "AccountPayments",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      account_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Accounts",
          key: "id",
        },
      },
      paid_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      amount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      payment_method: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "PaymentMethods",
          key: "id",
        },
      },
      reference: {
        type: DataTypes.STRING(100),
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
      tableName: "AccountPayments",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ["account_id"],
          name: "idx_account_payments_account",
        },
      ],
    },
  );
};
