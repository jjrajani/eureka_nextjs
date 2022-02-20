import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Goal } from "types/types";
import { goalText } from "cms/strings";

interface GoalFieldProps {}

const GoalField = ({}: GoalFieldProps) => {
  return (
    <Field name="goal">
      {(field) => {
        return (
          <>
            <InputLabel>Goal</InputLabel>
            <Select variant="filled" name={field.input.name} displayEmpty>
              <MenuItem value="" disabled>
                Goal
              </MenuItem>
              <MenuItem value={Goal.WEIGHT_LOSS}>
                {goalText[Goal.WEIGHT_LOSS]}
              </MenuItem>
              <MenuItem value={Goal.WEIGHT_GAIN}>
                {goalText[Goal.WEIGHT_GAIN]}
              </MenuItem>
              <MenuItem value={Goal.WEIGHT_SUSTAIN}>
                {goalText[Goal.WEIGHT_SUSTAIN]}
              </MenuItem>
              <MenuItem value={Goal.IMPROVE_HEALTH}>
                {goalText[Goal.IMPROVE_HEALTH]}
              </MenuItem>
              <MenuItem value={Goal.BODY_RECOMP}>
                {goalText[Goal.BODY_RECOMP]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default GoalField;
