import MetabolicMasteryForm from "./MetabolicMasteryForm/MetabolicMasteryForm";
import MetabolicMasteryResults from "./MetabolicMasteryResults/MetabolicMasteryResults";
import { MetabolicMasteryContextProvider } from "./context";
import Box from "@mui/material/Box";

interface MetabolicMasteryPlannerProps {}

const MetabolicMasteryPlanner = ({}: MetabolicMasteryPlannerProps) => {
  return (
    <Box mt={8} mb={8}>
      METABOLIC
      <MetabolicMasteryContextProvider>
        <MetabolicMasteryForm />
        <MetabolicMasteryResults />
      </MetabolicMasteryContextProvider>
    </Box>
  );
};

export default MetabolicMasteryPlanner;
