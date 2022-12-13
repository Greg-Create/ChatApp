import { useEffect, createContext, useState } from "react";
import { supabase } from "../utils/SupabaseClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    setSessionLoading(false);
  }, []);

  useEffect(() => {
    if (sessionLoading == false && session !== null) {
      setLoading(false);
    }
  }, [session]);

  return (
    <UserContext.Provider
      value={{
        session,
        setSession,
        sessionLoading,
        setSessionLoading,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};