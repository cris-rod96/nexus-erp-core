import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "DocumentSequences",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      emission_point_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      document_type: {
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      last_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "DocumentSequences",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["emission_point_id", "document_type"],
          name: "uq_document_sequences_point_type",
        },
      ],
    },
  );
};
