import { Field } from "react-final-form";
import { TextField } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";

interface ReastingHeartRateFieldProps {}

const ReastingHeartRateField = ({}: ReastingHeartRateFieldProps) => {
  return (
    <Field name="rhr">
      {(field) => {
        return (
          <>
            <InputLabel>Resting Heart Rate (bpm)</InputLabel>
            <TextField
              variant="filled"
              placeholder="Resting Heart Rate (bpm)"
              name={field.input.name}
              inputProps={{
                min: 0,
                max: 500,
                type: "number",
              }}
            />
          </>
        );
      }}
    </Field>
  );
};

export default ReastingHeartRateField;
