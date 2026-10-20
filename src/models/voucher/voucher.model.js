import { DataTypes } from "sequelize";

const STATUSES = [
  "Borrador",
  "Emitido",
  "Enviado",
  "Autorizado",
  "Rechazado",
  "Anulado",
];
const SOURCE_TYPES = ["POS", "Manual", "Taxi"];
const PAYMENT_TERMS = ["Contado", "Crédito"];

export default (sq) => {
  sq.define(
    "Vouchers",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      business_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Businesses",
          key: "id",
        },
      },
      emitter_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Emitters",
          key: "id",
        },
      },
      emission_point_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "EmissionPoints",
          key: "id",
        },
      },
      document_sequence_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "DocumentSequences",
          key: "id",
        },
      },
      code_store: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      point_store: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      sequential: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      full_number: {
        type: DataTypes.STRING(17),
        allowNull: false,
      },
      issue_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      third_party_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "ThirdParties",
          key: "id",
        },
      },
      customer_id_type: {
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      customer_id_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      customer_legal_name: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      customer_email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      customer_address: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },

      subtotal_before_tax: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      total_discount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      total_vat: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      total_ice: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },

      tip: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      total_amount: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
      currency: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        defaultValue: "USD",
      },

      status: {
        type: DataTypes.ENUM,
        values: STATUSES,
        defaultValue: "Borrador",
      },

      environment: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
          isIn: [[1, 2]], // 1 = testing, 2 = producción
        },
      },
      access_key: {
        type: DataTypes.STRING(49),
        allowNull: true,
        unique: true,
      },
      authorization_number: {
        type: DataTypes.STRING(49),
        allowNull: true,
      },
      authorization_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      signed_xml_path: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      authorized_xml_path: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      ride_path: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      sri_messages: {
        type: DataTypes.JSONB,
        allowNull: true,
      },

      send_attempts: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },

      ref_voucher_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Vouchers",
          key: "id",
        },
      },

      reason: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },

      source_type: {
        type: DataTypes.ENUM,
        values: SOURCE_TYPES,
        defaultValue: "Manual",
      },

      source_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      payment_term: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: PAYMENT_TERMS,
        defaultValue: "Contado",
      },

      cash_shift_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      tableName: "Vouchers",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: [
            "emitter_id",
            "document_sequence_id",
            "code_store",
            "point_store",
            "sequential",
          ],
          name: "uq_voucher_emitter_sequence_code_point_sequential",
        },
        {
          fields: ["business_id", "issue_date"],
          name: "idx_voucher_business_date",
        },
        {
          fields: ["status"],
          name: "idx_voucher_status",
        },
        {
          fields: ["third_party_id"],
          name: "idx_voucher_costumer",
        },
      ],
    },
  );
};
