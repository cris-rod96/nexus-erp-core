import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "EmissionPoints",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      establishment_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      business_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },

      code: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "EmissionPoints",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["establishment_id", "code"],
          name: "uq_emission_points_establishment_code",
        },
      ],
    },
  );
};
