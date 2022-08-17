import { createContext, useState } from 'react';

/**
 * @typedef AuthContextType
 * @property {boolean} isAuth
 */

/** @type {AuthContextType} */
let initialContextValue;

export const authContext = createContext(initialContextValue);

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(Boolean);

  function handleSingIn(email, password) {
    /** @todo implement it */
  }

  function handleSingOut() {
    /** @todo implement it */
  }

  return (
    <authContext.Provider value={{ isAuth }}>{children}</authContext.Provider>
  );
};
