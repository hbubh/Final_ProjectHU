const chargeAble = (inputsValue, setAble) => {
  let FF;
  if (
    inputsValue.first !== "" &&
    inputsValue.last !== "" &&
    inputsValue.email !== "" &&
    inputsValue.city !== ""
  ) {
    FF = false;
    setAble(FF);
  } else if (
    inputsValue.first === "" ||
    inputsValue.last === "" ||
    inputsValue.email === "" ||
    inputsValue.city === ""
  ) {
    FF = true;
  }
  return setAble(FF);
};

const chargeAble2 = (inputsValue, setAble) => {
  let FF;
  if (inputsValue.change !== "") {
    FF = false;
    setAble(FF);
  } else if (inputsValue.change === "") {
    FF = true;
  }
  return setAble(FF);
};
export { chargeAble, chargeAble2 };
