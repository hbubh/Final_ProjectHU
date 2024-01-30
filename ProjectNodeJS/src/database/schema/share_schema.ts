import { Schema } from "mongoose";
import { addressSchema } from "./address_schema";
import { imageSchema } from "./image_schema";
import { IShareS } from "../../@types/share";

const shareSchema = new Schema<IShareS>({
  title: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  subtitle: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  description: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 100,
  },
  phone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 15,
  },
  email: {
    required: true,
    unique: false,
    type: String,
    minlength: 5,
    maxlength: 50,
  },
  web: {
    type: String,
    required: false,
  },
  price: [
    {
      type: Number,
      required: true,
      default: 100,
    },
    {
      type: Number,
      required: true,
      default: 100,
    },
  ],
  image: {
    type: imageSchema,
    required: false,
    default: {
      alt: "user profile",
      url: "https://picsum.photos/id/237/200/300",
    },
  },
  address: {
    type: addressSchema,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  bizNumber: {
    type: Number,
    required: false,
    default: () => Math.round(Math.random() * 1_000_000),
    unique: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
  owners: [
    {
      userId: {
        type: String,
        default: "",
      },
      pcs: {
        type: Number,
        default: 0,
      },
    },
  ],
});

export { shareSchema };
