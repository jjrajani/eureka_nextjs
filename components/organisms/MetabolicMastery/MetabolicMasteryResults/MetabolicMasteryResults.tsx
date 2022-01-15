import { useContext, useEffect, useState } from "react";
import MetabolicMasteryContext from "../context";
import MacroPieChart from "./MacroPieChart";
import Grid from "@mui/material/Grid";
import ResultCard from "./ResultCard";
import Typography from "@mui/material/Typography";
import styles from "./styles/MetabolicMasteryResults.module.scss";
import addCommasToNumber from "utils/addCommasToNumber";
import DownloadResultsButton from "./DownloadResultsButton";
import CaloriesPerDayRange from "components/atoms/CaloriesPerDayRange";
import Scroll from "react-scroll";
const Element = Scroll.Element;

interface MetabolicMasteryResultsProps {
  scrollToResults: () => void;
  wrapperId: string;
}
const WRAPPER_ID = "metabolic-results";

const MetabolicMasteryResults = ({
  scrollToResults,
  wrapperId,
}: MetabolicMasteryResultsProps) => {
  const { results } = useContext(MetabolicMasteryContext);
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    if (results) {
      if (!didScroll) {
        scrollToResults();
        setDidScroll(true);
      }
    } else {
      if (didScroll) {
        setDidScroll(false);
      }
    }
  }, [results, didScroll, setDidScroll]);

  return results ? (
    <Element name={wrapperId}>
      <div className={styles.resultsWrapper}>
        <div className={styles.headerWrapper}>
          <Typography variant="h2" component="p" align="center">
            <strong>My Numbers</strong>
          </Typography>
        </div>

        <p className={styles.calories}>
          <CaloriesPerDayRange calories={parseInt(results.calorieIntake, 10)} />{" "}
          Calories per day
        </p>
        <Grid
          container
          direction="column"
          className={styles.resultsList}
          spacing={2}
        >
          <Grid item>
            <ResultCard
              img="/images/BMI.jpg"
              alt="BMI"
              result={`BMI: ${results.bmi}`}
              description="Body Mass Index is a basic height to weight raito used as a general guideline for indicating healthy body weight range for height, but it does not take into account body composition."
            />
          </Grid>
          <Grid item>
            <ResultCard
              img="/images/BMR.jpg"
              alt="BMR"
              result={`BMR: ${results.bmr}`}
              description="Basal Metabolic Rate measures how many calories or energy is burned at rest. Basal metabolism accounts for 70% of total caloric needs with activity level and food digestion contributing the other 30%."
            />
          </Grid>
          <Grid item>
            <ResultCard
              img={<MacroPieChart />}
              alt="Macro"
              result={`Macro: ${results.macro.protein * 100}/${
                results.macro.carbs * 100
              }/${results.macro.fats * 100}`}
              description="Macronutrient ratios indicate what percentage of total calories come from Proteins / Carbohydrates / Fats based on the desired goal."
            />
          </Grid>
          <Grid item>
            <ResultCard
              img="/images/Water.jpg"
              alt="Water"
              result={`Water: ${results.handSizes.waterServing}`}
              note="8oz glasses per day"
              description="Water is the most important nutrient! We can survive weeks without food, but only days without water. It is recommended to drink 1/2 body weight in ounces of water per day (max 100oz)."
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DownloadResultsButton />
            </div>
          </Grid>
        </Grid>
      </div>
    </Element>
  ) : null;
};

export default MetabolicMasteryResults;
