import { Schema } from "mongoose";
import { IAddress } from "../../@types/user";

const addressSchema = new Schema<IAddress>({
  state: {
    required: false,
    default: "",
    type: String,
    minlength: 0,
    maxlength: 20,
  },
  country: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  city: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  street: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  houseNumber: {
    required: true,
    type: Number,
    minlength: 1,
    maxlength: 20,
  },
  zip: {
    required: false,
    type: Number,
    default: 0,
    minlength: 2,
    maxlength: 20,
  },
});
export { addressSchema };
