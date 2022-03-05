import { useContext } from "react";
import MealPlannerContext from "../context";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import validate from "./validate";
import AgeField from "components/molecules/fields/Age";
import GenderField from "components/molecules/fields/Gender";
import WeightField from "components/molecules/fields/Weight";
import HeightFtField from "components/molecules/fields/HeightFt";
import HeightInField from "components/molecules/fields/HeightIn";
import WaterField from "components/molecules/fields/Water";
import ActivityLevelField from "components/molecules/fields/ActivityLevel";
import GoalField from "components/molecules/fields/Goal";
import DietPreferenceField from "components/molecules/fields/DietType";
import RestRxField from "components/molecules/fields/RestRx";
import ExerciseFITTField from "components/molecules/fields/ExerciseFITT";
import ReastingHeartRateField from "components/molecules/fields/ReastingHeartRate";
import StressStageField from "components/molecules/fields/StressStage";
import SupplementTypeField from "components/molecules/fields/SupplementType";
import UserInfoContext from "components/organisms/UserInfoModal/context";
import UserInfoFields from "components/organisms/UserInfoModal/UserInfoFields";
// import tempInitialData from "./temp";

import { MyDressProfileFormState } from "types/types";

interface MyDressProfileFormProps {}

const MyDressProfileForm = ({}: MyDressProfileFormProps) => {
  const { calculateResults } = useContext(MealPlannerContext);
  const { values: userValues, setValues: setUserValues } = useContext(
    UserInfoContext
  );

  const initialValues: Partial<MyDressProfileFormState> = {
    // ...tempInitialData,
    ...userValues,
  };

  const onSubmit = (vals: MyDressProfileFormState) => {
    calculateResults(vals);
    setUserValues({
      first: vals.first,
      last: vals.last,
      email: vals.email,
    });
  };

  return (
    <Box mt={3} mb={8} id="dress-form">
      <Form<MyDressProfileFormState>
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {(formRenderProps) => {
          return (
            <form onSubmit={formRenderProps.handleSubmit}>
              <Grid container spacing={4}>
                <UserInfoFields />
                <Grid item xs={12} md={4}>
                  <AgeField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <GenderField />
                </Grid>
                <Hidden mdDown>
                  <Grid item xs={12} md={4}>
                    <WeightField />
                  </Grid>
                </Hidden>
                <Grid item xs={6} md={3}>
                  <HeightFtField />
                </Grid>
                <Grid item xs={6} md={3}>
                  <HeightInField />
                </Grid>
                <Hidden mdUp>
                  <Grid item xs={12} md={4}>
                    <WeightField />
                  </Grid>
                </Hidden>
                <Grid item xs={12} md={6}>
                  <WaterField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ActivityLevelField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <GoalField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <DietPreferenceField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SupplementTypeField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ReastingHeartRateField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <RestRxField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ExerciseFITTField />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StressStageField />
                </Grid>

                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit">SUBMIT</Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Form>
    </Box>
  );
};

export default MyDressProfileForm;
