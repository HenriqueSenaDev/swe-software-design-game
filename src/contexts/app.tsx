import { createContext, ReactNode, useState } from "react";
import { Feedback } from "../components/feedback";

export type AppContextReturnValue = {
  setMessage: (message: string | null) => void;
}

export const AppContext = createContext<AppContextReturnValue>(
  {} as AppContextReturnValue
);

export type AppContextProviderProps = {
  children?: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{
      setMessage,
    }}>
      <Feedback
        message={message}
        cleanMessage={() => setMessage(null)}
      />
      {children}
    </AppContext.Provider>
  );
}