import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface HeightFtFieldProps {}

const HeightFtField = ({}: HeightFtFieldProps) => {
  return (
    <Field name="heightFt">
      {(field) => {
        return (
          <>
            <InputLabel>Height (ft)</InputLabel>
            <TextField
              variant="filled"
              placeholder="Height (ft)"
              name={field.input.name}
              inputProps={{
                min: 0,
                max: 7,
                type: "number",
              }}
            />
          </>
        );
      }}
    </Field>
  );
};

export default HeightFtField;
