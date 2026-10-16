import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Groups",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Groups",
      timestamps: true,
      underscored: true,
    },
  );
};
