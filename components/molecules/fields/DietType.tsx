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
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Diet Type</MenuItem>
              <MenuItem value={DietPreference.ANYTHING}>
                {dietPrefText[DietPreference.ANYTHING]}
              </MenuItem>
              <MenuItem value={DietPreference.ETHNIC_SPECIFIC}>
                {dietPrefText[DietPreference.ETHNIC_SPECIFIC]}
              </MenuItem>
              <MenuItem value={DietPreference.GLUTEN_FREE}>
                {dietPrefText[DietPreference.GLUTEN_FREE]}
              </MenuItem>
              <MenuItem value={DietPreference.KETO}>
                {dietPrefText[DietPreference.KETO]}
              </MenuItem>
              <MenuItem value={DietPreference.LOW_CARB}>
                {dietPrefText[DietPreference.LOW_CARB]}
              </MenuItem>
              <MenuItem value={DietPreference.PESCATARIAN}>
                {dietPrefText[DietPreference.PESCATARIAN]}
              </MenuItem>
              <MenuItem value={DietPreference.VEGAN}>
                {dietPrefText[DietPreference.VEGAN]}
              </MenuItem>
              <MenuItem value={DietPreference.VEGETARIAN}>
                {dietPrefText[DietPreference.VEGETARIAN]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default DietPreferenceField;
