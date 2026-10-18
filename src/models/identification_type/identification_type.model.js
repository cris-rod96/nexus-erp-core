import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "IdentificationTypes",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
    },
    { timestamps: true, underscored: true, tableName: "IdentificationTypes" },
  );
};
