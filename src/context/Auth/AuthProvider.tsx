/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { Session, User } from "../../types";
import { AuthContext } from "./AuthContext";

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const access_token = getCookie("access_token") as string;
  const refresh_token = getCookie("refresh_token") as string;
  const user_cookie = getCookie("user") as string;
  const token_expires_in = getCookie("token_expires_in") as string;

  const router = useRouter();
  useEffect(() => {
    if (access_token && user_cookie) {
      setSession({ access_token, refresh_token });
      setUser(JSON.parse(user_cookie));
    }
  }, [access_token]);
  console.log("expires_in", token_expires_in);
  useEffect(() => {
    const now = new Date().getTime();
    const expiresDate = Number(token_expires_in) || now - 1;

    if (!access_token || now > expiresDate) {
      router.replace("/api/login");
    }
  }, [access_token, token_expires_in]);

  return (
    <AuthContext.Provider value={{ user, session, setSession, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
