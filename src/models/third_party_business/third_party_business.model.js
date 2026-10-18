import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "ThirdPartyBusinesses",
    {
      third_party_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "ThirdParties",
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
      credit_limit: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      credit_days: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "ThirdPartyBusinesses",
      timestamps: true,
      underscored: true,
    },
  );
};
