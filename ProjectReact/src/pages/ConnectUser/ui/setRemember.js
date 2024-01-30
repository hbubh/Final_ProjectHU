const TOKEN = "token";

const isLocalStorage = () => {
  return localStorage.getItem(TOKEN);
};

const storeToken = ({ jwt }, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem(TOKEN, jwt);
  } else {
    sessionStorage.setItem(TOKEN, jwt);
  }
};

const getToken = () => {
  let token = isLocalStorage();
  if (token) {
    return token;
  } else {
    return sessionStorage.getItem(TOKEN);
  }
};

export { storeToken, getToken };
