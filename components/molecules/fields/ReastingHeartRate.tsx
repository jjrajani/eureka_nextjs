import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { ReastingHeartRate } from "types/types";

interface ReastingHeartRateFieldProps {}

const ReastingHeartRateField = ({}: ReastingHeartRateFieldProps) => {
  const label = "bpm";
  return (
    <Field name="rhr">
      {(field) => {
        return (
          <>
            <InputLabel>Resting Heart Rate</InputLabel>
            <Select variant="filled" name={field.input.name}>
              <MenuItem value="null">Resting Heart Rate</MenuItem>
              <MenuItem value={ReastingHeartRate.FIFTY}>50{label}</MenuItem>
              <MenuItem value={ReastingHeartRate.FIFTY_FIVE}>
                55{label}
              </MenuItem>
              <MenuItem value={ReastingHeartRate.SIXTEY}>60{label}</MenuItem>
              <MenuItem value={ReastingHeartRate.SIXTEY_FIVE}>
                65{label}
              </MenuItem>
              <MenuItem value={ReastingHeartRate.SEVENTY}>70{label}</MenuItem>
              <MenuItem value={ReastingHeartRate.SEVENTY_FIVE}>
                75{label}
              </MenuItem>
              <MenuItem value={ReastingHeartRate.EIGHTY}>80{label}</MenuItem>
              <MenuItem value={ReastingHeartRate.EIGHTY_FIVE}>
                85{label}
              </MenuItem>
              <MenuItem value={ReastingHeartRate.NINETY}>90{label}</MenuItem>
              <MenuItem value={ReastingHeartRate.NINETY_FIVE}>
                95{label}
              </MenuItem>
              <MenuItem value={ReastingHeartRate.HUNDRED}>100{label}</MenuItem>
              <MenuItem value={ReastingHeartRate.HUNDRED_FIVE}>
                105{label}
              </MenuItem>
              <MenuItem value={ReastingHeartRate.HUNDRED_TEN}>
                110{label}
              </MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default ReastingHeartRateField;
