import { useEffect, createContext, useState } from "react";
import { supabase } from "../utils/SupabaseClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  const selectSession = async () => {
    let { data, error } = await supabase.auth.getSession();
    setSession(data);
  };

  useEffect(() => {
    selectSession();
  }, []);

  console.log(session);

  const getUserData = async () => {
    let {
      data: { user },
    } = await supabase.auth.getUser();
    setUserData(user);
  };

  useEffect(() => {
    if (session !== undefined) {
      getUserData();
    }
  },[session]);


  return (
    <UserContext.Provider
      value={{
        session,
        setSession,
        userData,
        setUserData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
