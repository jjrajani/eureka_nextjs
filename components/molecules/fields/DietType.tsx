import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { DietPreference } from "types/types";

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
              <MenuItem value={DietPreference.ANYTHING}>Anything</MenuItem>
              <MenuItem value={DietPreference.ETHNIC_SPECIFIC}>
                Ethnic Specific
              </MenuItem>
              <MenuItem value={DietPreference.GLUTEN_FREE}>
                Gluten Free
              </MenuItem>
              <MenuItem value={DietPreference.KETO}>Keto - High Fat</MenuItem>
              <MenuItem value={DietPreference.LOW_CARB}>Low Carb</MenuItem>
              <MenuItem value={DietPreference.PESCATARIAN}>
                Pescatarian
              </MenuItem>
              <MenuItem value={DietPreference.VEGAN}>Vegan</MenuItem>
              <MenuItem value={DietPreference.VEGETARIAN}>Vegetarian</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default DietPreferenceField;
