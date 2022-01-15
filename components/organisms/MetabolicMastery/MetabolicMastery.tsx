import MetabolicMasteryForm from "./MetabolicMasteryForm/MetabolicMasteryForm";
import MetabolicMasteryResults from "./MetabolicMasteryResults/MetabolicMasteryResults";
import { MetabolicMasteryContextProvider } from "./context";
import Box from "@mui/material/Box";
import Scroll from "react-scroll";
const Element = Scroll.Element;
const scroller = Scroll.scroller;

interface MetabolicMasteryPlannerProps {}

const MetabolicMasteryPlanner = ({}: MetabolicMasteryPlannerProps) => {
  const WRAPPER_ID = "metabolic-results";
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
      ~~ Metabolic Mastery ~~
      <MetabolicMasteryContextProvider>
        <MetabolicMasteryForm />
        <MetabolicMasteryResults
          wrapperId={WRAPPER_ID}
          scrollToResults={scrollToResults}
        />
      </MetabolicMasteryContextProvider>
    </Box>
  );
};

export default MetabolicMasteryPlanner;
