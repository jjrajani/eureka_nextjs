import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface AgeFieldProps {}

const AgeField = ({}: AgeFieldProps) => {
  return (
    <Field name="age">
      {(field) => {
        return (
          <>
            <InputLabel>Age</InputLabel>
            <TextField
              variant="filled"
              placeholder="Age"
              name={field.input.name}
              inputProps={{
                min: 0,
                max: 120,
                type: "number",
              }}
            />
          </>
        );
      }}
    </Field>
  );
};

export default AgeField;
