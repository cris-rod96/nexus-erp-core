import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "MeasurementUnits",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: "MeasurementUnits",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["group_id", "code"],
          name: "uq_measurement_group_code",
        },
      ],
    },
  );
};
