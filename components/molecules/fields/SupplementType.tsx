import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Supplement } from "types/types";
import { supplementText } from "cms/strings";

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
              <MenuItem value={Supplement.ENERGY}>
                {supplementText[Supplement.ENERGY]}
              </MenuItem>
              <MenuItem value={Supplement.GI}>
                {supplementText[Supplement.GI]}
              </MenuItem>
              <MenuItem value={Supplement.HORMONE}>
                {supplementText[Supplement.HORMONE]}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default SupplementTypeField;
