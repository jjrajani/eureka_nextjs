import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { Gender } from "types/types";

interface GenderFieldProps {}

const GenderField = ({}: GenderFieldProps) => {
  return (
    <Field name="gender" type="select">
      {(field) => {
        return (
          <>
            <InputLabel>Gender</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null" disabled>
                Gender
              </MenuItem>
              <MenuItem value={Gender.FEMALE}>Female</MenuItem>
              <MenuItem value={Gender.MALE}>Male</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default GenderField;
