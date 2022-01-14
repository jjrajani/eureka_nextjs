import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";

interface LastNameFieldProps {}

const LastNameField = ({}: LastNameFieldProps) => {
  return (
    <Field name="last">
      {(field) => {
        return (
          <>
            <InputLabel>Last Name</InputLabel>
            <TextField
              variant="filled"
              placeholder="Last Name"
              name={field.input.name}
            />
          </>
        );
      }}
    </Field>
  );
};

export default LastNameField;
