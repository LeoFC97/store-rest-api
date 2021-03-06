import { Schema } from 'mongoose';

const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    pictureUrL: {
      type: String,
      required: true,
    },
    address: {
      cep: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      complement: {
        type: String,
        required: true,
      },
    },
    createdBy: {
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    products: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export default StoreSchema;
