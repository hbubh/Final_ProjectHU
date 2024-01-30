import { number } from "joi";

type IName = {
  first: string;
  middle?: string;
  last: string;
};

type IImage = {
  alt?: string;
  url?: string;
};

type IAddress = {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip?: number;
};

type IUser = {
  name: IName;
  phone: string;
  email: string;
  password: string;
  image?: IImage;
  address: IAddress;
  isBusiness?: boolean;
  isPro?: boolean;
  isAdmin?: boolean;
  createdAt?: Date;
  wallet?: number;
  charged?: number;
  myShares?: [
    {
      shareId: string;
      pcs: number;
      costs: number;
    }
  ];
  _id?: string;
};
type ILogin = {
  email: string;
  password: string;
};
type IJWTPayload = {
  _id: string;
  first: string;
  last: string;
  isPro: boolean;
  isAdmin: boolean;
  isBusiness: boolean;
  email: string;
};

export { IUser, IAddress, IImage, IName, ILogin, IJWTPayload };
