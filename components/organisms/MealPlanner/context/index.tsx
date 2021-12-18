import { createContext, ReactNode } from "react";
import { FormState } from "../types";
import { CalculatorResult } from "types";
import useMealPlanner from "./useMealPlanner";

interface IMealPlannerContext {
  calculateResults: (vals: FormState) => void;
  loading: boolean;
  results?: CalculatorResult;
}

const defaultValue: IMealPlannerContext = {
  calculateResults: () => {},
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
