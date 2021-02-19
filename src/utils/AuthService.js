// import jwt from "jsonwebtoken";

export default class AuthService {
  isLoggedIn = () => {
    const auth = this.getAuth() || {};
    // const decodedToken = jwt.decode(token, { complete: true });
    // if (token && decodedToken) {
    //   const dateNow = new Date();
    //   return decodedToken.payload.exp * 1000 > dateNow.getTime();
    // }

    return !!auth.token;
  };

  setAuth = auth => {
    window.localStorage.setItem("auth", JSON.stringify(auth));
  };

  getAuth = () => {
    return JSON.parse(window.localStorage.getItem("auth"));
  };

  removeAuth = () => {
    window.localStorage.removeItem("auth");
  };
}
