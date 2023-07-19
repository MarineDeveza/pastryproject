import React, { useContext } from "react";
import Login from "../components/Login";
import { UserContext } from "../services/OnlineContext";
import Dashboard from "./Dashboard";

function Account() {
  const { isOnline } = useContext(UserContext);
  return <div>{!isOnline ? <Login /> : <Dashboard />}</div>;
}

export default Account;
