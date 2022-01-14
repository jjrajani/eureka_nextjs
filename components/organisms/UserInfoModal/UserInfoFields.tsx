import Grid from "@mui/material/Grid";
import FirstNameField from "components/molecules/fields/FirstName";
import LastNameField from "components/molecules/fields/LastName";
import EmailField from "components/molecules/fields/Email";

interface UserInfoFieldsProps {
  fullWidth?: boolean;
}

const UserInfoFields = ({ fullWidth }: UserInfoFieldsProps) => {
  return (
    <>
      <Grid item xs={12} md={fullWidth ? 12 : 4}>
        <FirstNameField />
      </Grid>
      <Grid item xs={12} md={fullWidth ? 12 : 4}>
        <LastNameField />
      </Grid>
      <Grid item xs={12} md={fullWidth ? 12 : 4}>
        <EmailField />
      </Grid>
    </>
  );
};

export default UserInfoFields;
