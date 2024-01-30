const registerSplit = (inputsValue) => {
  const texstFieldArry = [
    {
      name: "first",
      id: "first",
      require: true,
      label: "First Name",
      value: inputsValue.first,
      autoComplete: "first",
    },
    {
      name: "middle",
      id: "middle",
      require: false,
      label: "Middle Name",
      value: inputsValue.middle,
      autoComplete: "middle",
    },
    {
      name: "last",
      id: "last",
      require: true,
      label: "Last Name",
      value: inputsValue.last,
      autoComplete: "family-name",
    },
    {
      name: "email",
      id: "email",
      require: true,
      label: "Email",
      value: inputsValue.email,
      autoComplete: "email",
    },
    {
      name: "password",
      id: "password",
      require: true,
      label: "Password",
      value: inputsValue.password,
      autoComplete: "new-password",
    },
    {
      name: "phone",
      id: "phone",
      require: true,
      label: "Phone",
      value: inputsValue.phone,
      autoComplete: "new-phone",
    },
    {
      name: "url",
      id: "url",
      require: false,
      label: "Url",
      value: inputsValue.url,
      autoComplete: "new-url",
    },
    {
      name: "alt",
      id: "alt",
      require: false,
      label: "Alt",
      value: inputsValue.alt,
      autoComplete: "new-alt",
    },
    {
      name: "state",
      id: "state",
      require: false,
      label: "State",
      value: inputsValue.state,
      autoComplete: "new-state",
    },
    {
      name: "country",
      id: "country",
      require: true,
      label: "Country",
      value: inputsValue.country,
      autoComplete: "new-country",
    },
    {
      name: "city",
      id: "city",
      require: true,
      label: "City",
      value: inputsValue.city,
      autoComplete: "new-city",
    },
    {
      name: "houseNumber",
      id: "houseNumber",
      require: true,
      label: "House Number",
      value: inputsValue.houseNumber,
      autoComplete: "new-houseNumber",
    },

    {
      name: "street",
      id: "street",
      require: true,
      label: "Street",
      value: inputsValue.street,
      autoComplete: "new-street",
    },
    {
      name: "zip",
      id: "zip",
      require: false,
      label: "Zip",
      value: inputsValue.zip,
      autoComplete: "new-zip",
    },
  ];
  return texstFieldArry;
};
export default registerSplit;
