import { createContext, ReactNode } from "react";
import useMealPlanner, { UseMealPlanner } from "./useMealPlanner";

const defaultValue: UseMealPlanner = {
  calculateResults: () => {},
  downloadResults: () => {},
  loading: false,
};

const MealPlannerContext = createContext(defaultValue);

export const MealPlannerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useMealPlanner();

  return (
    <MealPlannerContext.Provider value={value}>
      {children}
    </MealPlannerContext.Provider>
  );
};

export default MealPlannerContext;
