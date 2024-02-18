import { Schema } from "mongoose";
import { IUser, IName } from "../../@types/user";
import { addressSchema } from "./address_schema";
import { imageSchema } from "./image_schema";
import { number } from "joi";

const nameSchema = new Schema<IName>({
  first: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  middle: {
    required: false,
    default: "",
    type: String,
    maxlength: 20,
  },
  last: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
});

const userSchema = new Schema<IUser>({
  name: nameSchema,
  address: addressSchema,
  image: {
    type: imageSchema,
    required: false,
    default: {
      alt: "user profile",
      url: "https://picsum.photos/id/237/200/300",
    },
  },
  phone: {
    required: true,
    type: String,
    minlength: 9,
    maxlength: 13,
  },
  wallet: {
    required: false,
    type: Number,
    default: 0,
    minlength: 1,
    maxlength: 13,
  },
  charged: {
    required: false,
    type: Number,
    default: 0,
    minlength: 1,
    maxlength: 13,
  },
  myShares: [
    {
      shareId: {
        type: String,
        default: "",
      },
      pcs: {
        type: Number,
        default: 0,
      },
      costs: {
        type: Number,
        default: 0,
      },
    },
  ],
  myLikes: [
    {
      shareId: {
        type: String,
        default: "",
      },
      value: {
        type: Number,
      },
    },
  ],
  email: {
    required: true,
    unique: true,
    type: String,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
    maxlength: 100,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
  isPro: {
    type: Boolean,
    required: false,
    default: false,
  },
  isBusiness: {
    type: Boolean,
    required: false,
    default: false,
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

export { userSchema };
