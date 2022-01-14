import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";

interface EmailFieldProps {}

const EmailField = ({}: EmailFieldProps) => {
  return (
    <Field name="email" type="email">
      {(field) => {
        return (
          <>
            <InputLabel>Email</InputLabel>
            <TextField
              variant="filled"
              placeholder="Email"
              name={field.input.name}
            />
          </>
        );
      }}
    </Field>
  );
};

export default EmailField;
