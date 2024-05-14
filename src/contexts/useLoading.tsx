import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: false,
  setLoading: (state: any) => {},
  message: "",
  setMessage: (state: any) => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const setLoadingState = (state: any) => {
    setLoading(state);
  };

  const setMessageState = (state: any) => {
    setMessage(state);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, setLoading: setLoadingState, message, setMessage: setMessageState }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
}
