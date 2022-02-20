import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Gender } from "types/types";
import { genderText } from "cms/strings";

interface GenderFieldProps {}

const GenderField = ({}: GenderFieldProps) => {
  return (
    <Field name="gender" type="select">
      {(field) => {
        return (
          <>
            <InputLabel>Gender</InputLabel>
            <Select variant="filled" name={field.input.name} displayEmpty>
              <MenuItem value="" disabled>
                Gender
              </MenuItem>
              <MenuItem value={Gender.FEMALE}>
                {genderText[Gender.FEMALE]}
              </MenuItem>
              <MenuItem value={Gender.MALE}>{genderText[Gender.MALE]}</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default GenderField;
