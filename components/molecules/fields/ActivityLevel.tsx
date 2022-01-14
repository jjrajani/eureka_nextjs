import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { Activity } from "types/types";

interface ActivityLevelFieldProps {}

const ActivityLevelField = ({}: ActivityLevelFieldProps) => {
  return (
    <Field name="activity">
      {(field) => {
        return (
          <>
            <InputLabel>Activity Level</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Activity Level</MenuItem>
              <MenuItem value={Activity.NONE}>None</MenuItem>
              <MenuItem value={Activity.LOW}>Low</MenuItem>
              <MenuItem value={Activity.MODERATE}>Moderate</MenuItem>
              <MenuItem value={Activity.HIGH}>High</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default ActivityLevelField;
