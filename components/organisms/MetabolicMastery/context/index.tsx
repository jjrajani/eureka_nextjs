import { createContext, ReactNode } from "react";
import useMealMastery, { UseMetabolicMastery } from "./useMetabolicMastery";

const defaultValue: UseMetabolicMastery = {
  calculateResults: () => {},
  downloadResults: () => {},
  loading: false,
};

const MetabolicMasteryContext = createContext(defaultValue);

export const MetabolicMasteryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useMealMastery();

  return (
    <MetabolicMasteryContext.Provider value={value}>
      {children}
    </MetabolicMasteryContext.Provider>
  );
};

export default MetabolicMasteryContext;
