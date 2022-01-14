import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { StressStage } from "types/types";

interface StressStageFieldProps {}

const StressStageField = ({}: StressStageFieldProps) => {
  return (
    <Field name="stress">
      {(field) => {
        return (
          <>
            <InputLabel>Stress Stage</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Stress Stage</MenuItem>
              <MenuItem value={StressStage.ACUTE}>Acute</MenuItem>
              <MenuItem value={StressStage.COMPENSATORY}>Compensatory</MenuItem>
              <MenuItem value={StressStage.EXHAUSTION}>Exhaustion</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default StressStageField;
