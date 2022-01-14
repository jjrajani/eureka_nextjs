import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";

interface FirstNameFieldProps {}

const FirstNameField = ({}: FirstNameFieldProps) => {
  return (
    <Field name="first">
      {(field) => {
        return (
          <>
            <InputLabel>First Name</InputLabel>
            <TextField
              variant="filled"
              placeholder="First Name"
              name={field.input.name}
            />
          </>
        );
      }}
    </Field>
  );
};

export default FirstNameField;
