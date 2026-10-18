import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Batches",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      batch_code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      manufacturing_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      expiration_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
      },
    },
    {
      tableName: "Batches",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["product_id", "batch_code"],
          name: "uq_batches_product_batch_code",
        },
      ],
    },
  );
};
