import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Groups", key: "id" },
      },
      first_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(13),
        allowNull: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_owner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // el dueño ve todos los negocios del grupo
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      last_login_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "Users",
      underscored: true,
      // el hash nunca sale en las consultas normales
      defaultScope: {
        attributes: { exclude: ["password_hash"] },
      },
    },
  );
};
