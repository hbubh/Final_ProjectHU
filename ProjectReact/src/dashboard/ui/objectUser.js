import CircularProgress from "@mui/material/CircularProgress";
const userObj = {
  address: {
    city: "",
    country: "",
    houseNumber: "",
    state: "",
    street: "",
    zip: "",
  },
  image: {
    alt: "",
    url: "",
  },
  name: {
    first: <CircularProgress />,
    last: "",
    middle: "",
  },
  _id: <CircularProgress />,
  createdAt: <CircularProgress />,
  email: <CircularProgress />,
  isAdmin: false,
  isPro: false,
  isBusiness: false,
  myShares: false,
  phone: <CircularProgress />,
  wallet: <CircularProgress />,
  charged: <CircularProgress />,
};

const setUserObj = (user) => {
  return {
    address: {
      city: user.address.city,
      country: user.address.country,
      houseNumber: user.address.houseNumber,
      state: user.address.state,
      street: user.address.street,
      zip: user.address.zip,
    },
    image: {
      alt: user.image.alt,
      url: user.image.url,
    },
    name: {
      first: user.name.first,
      last: user.name.last,
      middle: user.name.middle0,
    },
    _id: user._id,
    createdAt: user.createdAt,
    email: user.email,
    isAdmin: user.isAdmin,
    isPro: user.isPro,
    isBusiness: user.isBusiness,
    myShares: user.myShares,
    phone: user.phone,
    wallet: user.wallet,
    charged: user.charged,
  };
};
export { userObj, setUserObj };
