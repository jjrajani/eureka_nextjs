import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DietPreference } from "types/types";
import { dietPrefText } from "cms/strings";

interface DietPreferenceFieldProps {}

const DietPreferenceField = ({}: DietPreferenceFieldProps) => {
  return (
    <Field name="dietPreference">
      {(field) => {
        return (
          <>
            <InputLabel>Diet Type</InputLabel>
            <Select variant="filled" name={field.input.name} displayEmpty>
              <MenuItem value="" disabled>Diet Type</MenuItem>
              <MenuItem value={DietPreference.PROTIEN}>
                {dietPrefText[DietPreference.PROTIEN]}
              </MenuItem>
              <MenuItem value={DietPreference.CARB}>
                {dietPrefText[DietPreference.CARB]}
              </MenuItem>
              <MenuItem value={DietPreference.MIXED}>
                {dietPrefText[DietPreference.MIXED]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default DietPreferenceField;
