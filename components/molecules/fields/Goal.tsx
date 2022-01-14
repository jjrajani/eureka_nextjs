import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { Goal } from "types/types";

interface GoalFieldProps {}

const GoalField = ({}: GoalFieldProps) => {
  return (
    <Field name="goal">
      {(field) => {
        return (
          <>
            <InputLabel>Goal</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Goal</MenuItem>
              <MenuItem value={Goal.WEIGHT_LOSS}>Weight Loss</MenuItem>
              <MenuItem value={Goal.WEIGHT_GAIN}>Weight Gain</MenuItem>
              <MenuItem value={Goal.WEIGHT_SUSTAIN}>Weight Sustain</MenuItem>
              <MenuItem value={Goal.IMPROVE_HEALTH}>Improve Health</MenuItem>
              <MenuItem value={Goal.BODY_RECOMP}>Body Recomposition</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default GoalField;
