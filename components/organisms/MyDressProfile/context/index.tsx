import { createContext, ReactNode } from "react";
import useMealMastery, { UseMyDressProfile } from "./useMyDressProfile";

const defaultValue: UseMyDressProfile = {
  calculateResults: () => {},
  downloadResults: () => {},
  loading: false,
};

const MyDressProfileContext = createContext(defaultValue);

export const MyDressProfileContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useMealMastery();

  return (
    <MyDressProfileContext.Provider value={value}>
      {children}
    </MyDressProfileContext.Provider>
  );
};

export default MyDressProfileContext;
