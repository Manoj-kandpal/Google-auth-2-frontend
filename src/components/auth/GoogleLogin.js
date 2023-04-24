import React from "react";
import { Button } from "react-bootstrap";
const BACKEND_URL = "https://fair-cyan-codfish-gear.cyclic.app";

const GoogleLogin = () => {
  const loginWithGoogle = async (ev) => {
    ev.preventDefault();
    window.open(BACKEND_URL + "/api/auth/google", "_self");
    // const res = await api.get('/auth/google', config);
  };
  return (
    <Button variant="danger" onClick={loginWithGoogle}>
      <i className="fa-brands fa-google" />
      &nbsp;&nbsp;Login
    </Button>
  );
};

export default GoogleLogin;
