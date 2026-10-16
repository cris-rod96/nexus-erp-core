import { DataTypes } from "sequelize";

export default (sq) => {
  sq.define(
    "Emitters",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      ruc: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      legal_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      trade_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taxpayer_type: {
        type: DataTypes.ENUM,
        values: [
          "Persona Natural",
          "Sociedad",
          "RIMPE Emprendedor",
          "RIMPE Negocio Popular",
        ],
        allowNull: false,
      },
      accounting_required: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      special_taxpayer: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      withholding_agent: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      head_office_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      environment: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
          isIn: [[1, 2]],
        },
      },
      emission_type: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
      },
      certificate_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      certificate_password_encrypted: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      certificate_expires_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      logo_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      group_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },

    {
      tableName: "Emitters",
      timestamps: true,
    },
  );
};
