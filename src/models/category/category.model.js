import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Categories",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Groups",
          key: "id",
        },
      },
      parent_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      tableName: "Categories",
      timestamps: true,
      underscored: true,
    },
  );
};
