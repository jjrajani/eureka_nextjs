import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { activityLevelText } from "cms/strings";

import { Activity } from "types/types";

interface ActivityLevelFieldProps {}

const ActivityLevelField = ({}: ActivityLevelFieldProps) => {
  return (
    <Field name="activity">
      {(field) => {
        return (
          <>
            <InputLabel>Activity Level</InputLabel>
            <Select variant="filled" name={field.input.name} displayEmpty>
              <MenuItem value="" disabled>
                Activity Level
              </MenuItem>
              <MenuItem value={Activity.NONE}>
                {activityLevelText[Activity.NONE]}
              </MenuItem>
              <MenuItem value={Activity.LOW}>
                {activityLevelText[Activity.LOW]}
              </MenuItem>
              <MenuItem value={Activity.MODERATE}>
                {activityLevelText[Activity.MODERATE]}
              </MenuItem>
              <MenuItem value={Activity.HIGH}>
                {activityLevelText[Activity.HIGH]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default ActivityLevelField;
