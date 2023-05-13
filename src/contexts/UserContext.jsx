import { useContext, useState, createContext } from "react";

export const UserContext = createContext({
  user: null,
  useLogin: () => {},
  cerrarSesion: () => {},
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(sessionStorage.getItem("user")) ?? null
  );

  function cerrarSesion() {
    setUser(null);
    sessionStorage.removeItem("user");
  }
  function useLogin(usuario) {
    setUser(usuario);
    sessionStorage.setItem("user", JSON.stringify(usuario));
  }

  const value = {
    user,
    useLogin,
    cerrarSesion,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
