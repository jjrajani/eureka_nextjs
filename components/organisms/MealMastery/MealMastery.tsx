import MealMasteryForm from "./MealMasteryForm/MealMasteryForm";
import MealMasteryResults from "./MealMasteryResults/MealMasteryResults";
import { MealMasteryContextProvider } from "./context";
import Box from "@mui/material/Box";
import Scroll from "react-scroll";
const scroller = Scroll.scroller;

interface MealMasteryPlannerProps {}

const MealMasteryPlanner = ({}: MealMasteryPlannerProps) => {
  const WRAPPER_ID = "meal-results";
  const scrollToResults = () => {
    scroller.scrollTo(WRAPPER_ID, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50, // Scrolls to element - 50 pixels down the page
    });
  };

  return (
    <Box mt={8} mb={8}>
      <MealMasteryContextProvider>
        <MealMasteryForm />
        <MealMasteryResults
          wrapperId={WRAPPER_ID}
          scrollToResults={scrollToResults}
        />
      </MealMasteryContextProvider>
    </Box>
  );
};

export default MealMasteryPlanner;
