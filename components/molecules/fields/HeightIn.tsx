import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";

interface HeightInFieldProps {}

const HeightInField = ({}: HeightInFieldProps) => {
  return (
    <Field name="heightIn">
      {(field) => {
        return (
          <>
            <InputLabel>Height (in)</InputLabel>
            <TextField
              variant="filled"
              placeholder="Height (in)"
              name={field.input.name}
              inputProps={{
                min: 0,
                max: 11,
                type: "number",
              }}
            />
          </>
        );
      }}
    </Field>
  );
};

export default HeightInField;
