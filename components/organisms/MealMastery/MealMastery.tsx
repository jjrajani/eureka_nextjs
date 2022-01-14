import MealMasteryForm from "./MealMasteryForm/MealMasteryForm";
import MealMasteryResults from "./MealMasteryResults/MealMasteryResults";
import { MealMasteryContextProvider } from "./context";
import Box from "@mui/material/Box";

interface MealMasteryPlannerProps {}

const MealMasteryPlanner = ({}: MealMasteryPlannerProps) => {
  return (
    <Box mt={8} mb={8}>
      MEAL
      <MealMasteryContextProvider>
        <MealMasteryForm />
        <MealMasteryResults />
      </MealMasteryContextProvider>
    </Box>
  );
};

export default MealMasteryPlanner;
