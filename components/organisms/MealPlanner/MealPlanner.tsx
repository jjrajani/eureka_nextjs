import MealPlannerForm from "./MealPlannerForm/MealPlannerForm";
import MealPlannerResults from "./MealPlannerResults/MealPlannerResults";
import { MealPlannerContextProvider } from "./context";
import Box from "@mui/material/Box";

interface MealPlannerProps {}

const MealPlanner = ({}: MealPlannerProps) => {
  return (
    <Box mt={8} mb={8}>
      <MealPlannerContextProvider>
        <MealPlannerForm />
        <MealPlannerResults />
      </MealPlannerContextProvider>
    </Box>
  );
};

export default MealPlanner;
