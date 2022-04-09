import { createContext, ReactNode } from "react";
import useMealMastery, { UseMealMastery } from "components/organisms/MealMastery/context/useMealMastery";

const defaultValue: UseMealMastery = {
  calculateResults: () => {},
  downloadResults: () => {},
  loading: false,
};

const MealMasteryContext = createContext(defaultValue);

export const MealMasteryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useMealMastery();

  return (
    <MealMasteryContext.Provider value={value}>
      {children}
    </MealMasteryContext.Provider>
  );
};

export default MealMasteryContext;
