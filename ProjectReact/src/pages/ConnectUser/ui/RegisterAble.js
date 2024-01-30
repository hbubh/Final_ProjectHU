const rgisterAble = (inputsValue, setAble) => {
  let FF;
  if (
    inputsValue.first !== "" &&
    inputsValue.last !== "" &&
    inputsValue.phone !== "" &&
    inputsValue.email !== "" &&
    inputsValue.password !== "" &&
    inputsValue.country !== "" &&
    inputsValue.city !== "" &&
    inputsValue.street !== "" &&
    inputsValue.houseNumber !== ""
  ) {
    FF = false;
    setAble(FF);
  } else if (
    inputsValue.first === "" ||
    inputsValue.last === "" ||
    inputsValue.phone === "" ||
    inputsValue.email === "" ||
    inputsValue.password === "" ||
    inputsValue.country === "" ||
    inputsValue.city === "" ||
    inputsValue.street === "" ||
    inputsValue.houseNumber === ""
  ) {
    FF = true;
  }
  return setAble(FF);
};
export default rgisterAble;
