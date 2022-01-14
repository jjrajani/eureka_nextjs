import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { Supplement } from "types/types";

interface SupplementTypeFieldProps {}

const SupplementTypeField = ({}: SupplementTypeFieldProps) => {
  return (
    <Field name="supplementType">
      {(field) => {
        return (
          <>
            <InputLabel>Supplement Type</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Supplement Type</MenuItem>
              <MenuItem value={Supplement.ENERGY}>Energy</MenuItem>
              <MenuItem value={Supplement.GI}>GI</MenuItem>
              <MenuItem value={Supplement.HORMONE}>Hormone</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default SupplementTypeField;
