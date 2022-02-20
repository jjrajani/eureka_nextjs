import { Field } from "react-final-form";
import { Select } from "mui-rff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { RestRx } from "types/types";
import { restRxText } from "cms/strings";

interface RestRxFieldProps {}

const RestRxField = ({}: RestRxFieldProps) => {
  return (
    <Field name="restRx">
      {(field) => {
        return (
          <>
            <InputLabel>Rest Rx</InputLabel>
            <Select variant="filled" name={field.input.name} displayEmpty>
              <MenuItem value="">Rest Rx</MenuItem>
              <MenuItem value={RestRx.POOR}>{restRxText[RestRx.POOR]}</MenuItem>
              <MenuItem value={RestRx.FAIR}>{restRxText[RestRx.FAIR]}</MenuItem>
              <MenuItem value={RestRx.GOOD}>{restRxText[RestRx.GOOD]}</MenuItem>
            </Select>
          </>
        );
      }}
    </Field>
  );
};

export default RestRxField;
