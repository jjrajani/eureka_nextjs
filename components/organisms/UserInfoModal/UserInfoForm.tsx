import { useContext } from "react";
import UserInfoContext from "./context";
import { UseUserInfo } from "./context/useUserInfo";
import { Form, Field } from "react-final-form";
import { TextField } from "mui-rff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import UserInfoFields from "components/organisms/UserInfoModal/UserInfoFields";
import validateForm from "./utils/validateForm";

interface UserInfoFormProps {}

const UserInfoForm = ({}: UserInfoFormProps) => {
  const { values, setValues } = useContext(UserInfoContext);

  const onSubmit = (vals: UseUserInfo["values"]) => {
    setValues(vals);
  };

  return (
    <div>
      <Box mb={3}>
        <Typography variant="h2" component="p" gutterBottom>
          User Details
        </Typography>
        <Typography component="p" gutterBottom>
          Please provide a few details about yourself so we can associate your
          results with your account.
        </Typography>
      </Box>
      <Form<UseUserInfo["values"]>
        onSubmit={onSubmit}
        initialValues={values}
        validate={validateForm}
      >
        {(formRenderProps) => {
          return (
            <form onSubmit={formRenderProps.handleSubmit}>
              <Grid container spacing={4}>
                <UserInfoFields fullWidth />
                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit" disabled={formRenderProps.invalid}>
                      SUBMIT
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Form>
    </div>
  );
};

export default UserInfoForm;
