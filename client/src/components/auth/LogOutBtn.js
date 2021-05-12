import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  const logOut = async () => {
    await axios.get("http://localhost:5000/api/users/logout");
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOut}>Log out</button>;
};

export default LogOutBtn;