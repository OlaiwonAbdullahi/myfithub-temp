"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
  first_name: string;
  last_name: string;
} | null;

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
  loading: boolean;
  refetchUser: () => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (!token) {
        throw new Error("No authentication token found");
      }

      const res = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/auth/user/me",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data.data.user);
        setUser(data.data.user);

        localStorage.setItem("user", JSON.stringify(data.data.user || data));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, logout, loading, refetchUser: fetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside a <UserProvider>");
  }
  return context;
};
