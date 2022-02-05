import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { StressStage } from "types/types";
import { stressStageText } from "cms/strings";

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
              <MenuItem value={StressStage.ACUTE}>
                {stressStageText[StressStage.ACUTE]}
              </MenuItem>
              <MenuItem value={StressStage.COMPENSATORY}>
                {stressStageText[StressStage.COMPENSATORY]}
              </MenuItem>
              <MenuItem value={StressStage.EXHAUSTION}>
                {stressStageText[StressStage.EXHAUSTION]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default StressStageField;
