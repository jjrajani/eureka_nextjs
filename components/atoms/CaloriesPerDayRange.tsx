import addCommasToNumber from "utils/addCommasToNumber";

interface CaloriesPerDayRangeProps {
  calories: number;
}

const CaloriesPerDayRange = ({ calories }: CaloriesPerDayRangeProps) => {
  return (
    <span>
      {addCommasToNumber(calories - 100)} - {addCommasToNumber(calories + 100)}
    </span>
  );
};

export default CaloriesPerDayRange;
