const handleClickSx = (e, setColor) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const minScreenWidth = 1024;
  const minScreenHeight = 568;
  if (screenWidth >= minScreenWidth && screenHeight >= minScreenHeight) {
    const { style } = e.target;
    if (style.position === "absolute" && style.marginLeft === "-33%") {
      style.marginLeft = "10%";
      style.position = "";
      setColor("");
    } else {
      style.marginLeft = "-33%";
      style.position = "absolute";
      setColor("aliceblue");
    }
  } else {
    return;
  }
};
const handleClick1Sx = (e, setColor) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const minScreenWidth = 1024;
  const minScreenHeight = 568;
  if (screenWidth >= minScreenWidth && screenHeight >= minScreenHeight) {
    const { style } = e.target;
    if (style.position === "absolute" && style.width === "33%") {
      style.width = "100%";
      style.position = "";
      style.marginTop = "";
      setColor("");
    } else {
      style.position = "absolute";
      style.width = "33%";
      style.marginTop = "-15%";
      setColor("aliceblue");
    }
  } else {
    return;
  }
};

export { handleClickSx, handleClick1Sx };
