import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { ExerciseFITT } from "types/types";

interface ExerciseFITTFieldProps {}

const ExerciseFITTField = ({}: ExerciseFITTFieldProps) => {
  return (
    <Field name="exerciseFitt">
      {(field) => {
        return (
          <>
            <InputLabel>Exercise F.I.T.T.</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Exercise F.I.T.T.</MenuItem>
              <MenuItem value={ExerciseFITT.BEGINNER}>Beginner</MenuItem>
              <MenuItem value={ExerciseFITT.INTERMEDIATE}>
                Intermediate
              </MenuItem>
              <MenuItem value={ExerciseFITT.ADVANCED}>Advanced</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default ExerciseFITTField;
