import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { RestRx } from "types/types";

interface RestRxFieldProps {}

const RestRxField = ({}: RestRxFieldProps) => {
  return (
    <Field name="restRx">
      {(field) => {
        return (
          <>
            <InputLabel>Rest Rx</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Rest Rx</MenuItem>
              <MenuItem value={RestRx.POOR}>Poor</MenuItem>
              <MenuItem value={RestRx.FAIR}>Fair</MenuItem>
              <MenuItem value={RestRx.GOOD}>Good</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default RestRxField;
