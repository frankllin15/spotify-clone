import { createContext } from "react";
import { Session, User } from "../../types";

type Context = {
  user: User | null;
  setUser: (user: User | null) => void;
  session: Session | null;
  setSession: (session: Session) => void;
};

export const AuthContext = createContext<Context | null>(null);
