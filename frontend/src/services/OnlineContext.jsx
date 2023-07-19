/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserIsOnlineContext(props) {
  const { children } = props;
  const onLine = JSON.parse(localStorage.getItem("user"));
  const [isOnline, setIsOnline] = useState(onLine);

  return (
    <div>
      <UserContext.Provider value={{ isOnline, setIsOnline }}>
        {children}{" "}
      </UserContext.Provider>
    </div>
  );
}

export default UserIsOnlineContext;
