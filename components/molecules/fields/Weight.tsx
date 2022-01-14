import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface WeightFieldProps {}

const WeightField = ({}: WeightFieldProps) => {
  return (
    <Field name="weight">
      {(field) => {
        return (
          <>
            <InputLabel>Weight</InputLabel>
            <TextField
              variant="filled"
              placeholder="Weight"
              name={field.input.name}
              inputProps={{
                min: 0,
                type: "number",
              }}
            />
          </>
        );
      }}
    </Field>
  );
};

export default WeightField;
