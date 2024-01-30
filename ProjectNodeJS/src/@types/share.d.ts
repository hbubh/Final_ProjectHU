export type IShare = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  price: [number, number];
  address: IAddress;
  image: Image;
};

export type IShareS = IShare & {
  bizNumber?: number;
  userId?: string;
  _id?: string;
  owners: [
    {
      userId: string;
      pcs: number;
    }
  ];
  createdAt: Date;
};
