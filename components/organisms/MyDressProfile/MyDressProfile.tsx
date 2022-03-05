import MyDressProfileForm from "./MyDressProfileForm/MyDressProfileForm";
import MyDressProfileResults from "./MyDressProfileResults/MyDressProfileResults";
import { MyDressProfileContextProvider } from "./context";
import Box from "@mui/material/Box";
import Scroll from "react-scroll";
const scroller = Scroll.scroller;

interface MyDressProfilePlannerProps {}

const MyDressProfilePlanner = ({}: MyDressProfilePlannerProps) => {
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
      <MyDressProfileContextProvider>
        <MyDressProfileForm />
        <MyDressProfileResults
          wrapperId={WRAPPER_ID}
          scrollToResults={scrollToResults}
        />
      </MyDressProfileContextProvider>
    </Box>
  );
};

export default MyDressProfilePlanner;
