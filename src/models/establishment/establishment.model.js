import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Establisments",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      emitter_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: "Establishments",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["emitter_id", "code"],
          name: "uq_establishment_emitter_code",
        },
      ],
    },
  );
};
