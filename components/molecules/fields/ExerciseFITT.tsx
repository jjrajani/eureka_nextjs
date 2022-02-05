import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ExerciseFITT } from "types/types";
import { fittText } from "cms/strings";

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
              <MenuItem value={ExerciseFITT.BEGINNER}>
                {fittText[ExerciseFITT.BEGINNER]}
              </MenuItem>
              <MenuItem value={ExerciseFITT.INTERMEDIATE}>
                {fittText[ExerciseFITT.INTERMEDIATE]}
              </MenuItem>
              <MenuItem value={ExerciseFITT.ADVANCED}>
                {fittText[ExerciseFITT.ADVANCED]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default ExerciseFITTField;
