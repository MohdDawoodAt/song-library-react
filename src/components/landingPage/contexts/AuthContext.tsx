import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextData {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem("authToken") !== null;
  });

  useEffect(() => {
    if (isLoggedIn) {
      sessionStorage.setItem("authToken", "your_token_here");
    } else {
      sessionStorage.removeItem("authToken");
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
