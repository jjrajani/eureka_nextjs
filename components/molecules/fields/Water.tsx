import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";

interface WeightFieldProps {}

const WeightField = ({}: WeightFieldProps) => {
  return (
    <Field name="water">
      {(field) => {
        return (
          <>
            <InputLabel>Water (8oz glasses)</InputLabel>
            <TextField
              variant="filled"
              placeholder="Water (8oz glasses)"
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
