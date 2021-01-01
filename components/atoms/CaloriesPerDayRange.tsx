import addCommasToNumber from "utils/addCommasToNumber";
import { CalorieIntake } from "types/types";

interface CaloriesPerDayRangeProps {
  calories: CalorieIntake;
}

const CaloriesPerDayRange = ({ calories }: CaloriesPerDayRangeProps) => {
  return (
    <span>
      {addCommasToNumber(calories?.low)} - {addCommasToNumber(calories?.high)}
    </span>
  );
};

export default CaloriesPerDayRange;
