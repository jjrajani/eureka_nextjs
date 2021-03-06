import { useContext } from "react";
import UserInfoContext from "components/organisms/UserInfoModal/context";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import UserInfoFields from "components/organisms/UserInfoModal/UserInfoFields";
import validateForm from "components/organisms/UserInfoModal/utils/validateForm";
import { UserFormState } from "types/types";
import styles from "components/organisms/UserInfoModal/styles/UserInfoForm.module.scss";

interface UserInfoFormProps {}

const UserInfoForm = ({}: UserInfoFormProps) => {
  const { values, setValues } = useContext(UserInfoContext);

  const onSubmit = (vals: UserFormState) => {
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
      <Form<UserFormState>
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
                  <div className={styles.submitWrapper}>
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
