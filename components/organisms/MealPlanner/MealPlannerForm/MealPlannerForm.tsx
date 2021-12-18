import { useContext } from "react";
import MealPlannerContext from "../context";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "mui-rff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import validate from "./validate";
import {
  Activity,
  DietPreference,
  Gender,
  Goal,
  MealPlannerFormState,
} from "types/types";

interface MealPlannerFormProps {}

const MealPlannerForm = ({}: MealPlannerFormProps) => {
  const { calculateResults, results } = useContext(MealPlannerContext);
  const initialValues: Partial<MealPlannerFormState> = {
    age: undefined,
    gender: "none",
    weight: undefined,
    heightFt: undefined,
    heightIn: undefined,
    water: undefined,
    activity: "none",
    goal: "none",
    dietPreference: "none",
  };

  const onSubmit = (vals: MealPlannerFormState) => {
    console.log("vals", vals);
    calculateResults(vals);
  };

  console.log("results", results);

  return (
    <Box mt={3} mb={8}>
      <Form<MealPlannerFormState>
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {(formRenderProps) => {
          console.log("formRenderProps");
          return (
            <form onSubmit={formRenderProps.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Field name="age">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Age</InputLabel>
                          <TextField
                            variant="filled"
                            placeholder="Age"
                            name={field.input.name}
                            inputProps={{
                              min: 0,
                              max: 120,
                              type: "number",
                            }}
                          />
                        </>
                      );
                    }}
                  </Field>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Field name="gender" type="select">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Gender</InputLabel>
                          <Select variant="filled" name={field.input.name}>
                            <MenuItem value="none" disabled>
                              Gender
                            </MenuItem>
                            <MenuItem value={Gender.FEMALE}>Female</MenuItem>
                            <MenuItem value={Gender.MALE}>Male</MenuItem>
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                </Grid>
                <Hidden mdDown>
                  <Grid item xs={12} md={4}>
                    <Field name="weight">
                      {(field) => {
                        return (
                          <>
                            <InputLabel>Weight</InputLabel>
                            <TextField
                              variant="filled"
                              placeholder="Weight"
                              name={field.input.name}
                              inputProps={{
                                min: 0,
                                type: "number",
                              }}
                            />
                          </>
                        );
                      }}
                    </Field>
                  </Grid>
                </Hidden>
                <Grid item xs={6} md={3}>
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
                </Grid>
                <Grid item xs={6} md={3}>
                  <Field name="heightIn">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Height (in)</InputLabel>
                          <TextField
                            variant="filled"
                            placeholder="Height (in)"
                            name={field.input.name}
                            inputProps={{
                              min: 0,
                              max: 11,
                              type: "number",
                            }}
                          />
                        </>
                      );
                    }}
                  </Field>
                </Grid>
                <Hidden mdUp>
                  <Grid item xs={12} md={4}>
                    <Field name="weight">
                      {(field) => {
                        return (
                          <>
                            <InputLabel>Weight</InputLabel>
                            <TextField
                              variant="filled"
                              placeholder="Weight"
                              name={field.input.name}
                              inputProps={{
                                min: 0,
                                type: "number",
                              }}
                            />
                          </>
                        );
                      }}
                    </Field>
                  </Grid>
                </Hidden>
                <Grid item xs={12} md={6}>
                  <Field name="water">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Water (8oz glasses)</InputLabel>
                          <TextField
                            variant="filled"
                            placeholder="Water (8oz glasses)"
                            name={field.input.name}
                            inputProps={{
                              min: 0,
                              type: "number",
                            }}
                          />
                        </>
                      );
                    }}
                  </Field>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Field name="activity">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Activity Level</InputLabel>
                          <Select variant="filled" name={field.input.name}>
                            <MenuItem value="none">Activity Level</MenuItem>
                            <MenuItem value={Activity.LOW}>Low</MenuItem>
                            <MenuItem value={Activity.MODERATE}>
                              Moderate
                            </MenuItem>
                            <MenuItem value={Activity.HIGH}>High</MenuItem>
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Field name="goal">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Goal</InputLabel>
                          <Select variant="filled" name={field.input.name}>
                            <MenuItem value="none">Goal</MenuItem>
                            <MenuItem value={Goal.WEIGHT_LOSS}>
                              Weight Loss
                            </MenuItem>
                            <MenuItem value={Goal.IMPROVE_HEALTH}>
                              Improve Health
                            </MenuItem>
                            <MenuItem value={Goal.BODY_RECOMP}>
                              Body Recomposition
                            </MenuItem>
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Field name="dietPreference">
                    {(field) => {
                      return (
                        <>
                          <InputLabel>Diet Preference</InputLabel>
                          <Select variant="filled" name={field.input.name}>
                            <MenuItem value="none">Diet Preference</MenuItem>
                            <MenuItem value={DietPreference.ANYTHING}>
                              Anything
                            </MenuItem>
                            <MenuItem value={DietPreference.ETHNIC_SPECIFIC}>
                              Ethnic Specific
                            </MenuItem>
                            <MenuItem value={DietPreference.GLUTEN_FREE}>
                              Gluten Free
                            </MenuItem>
                            <MenuItem value={DietPreference.KETO}>
                              Keto - High Fat
                            </MenuItem>
                            <MenuItem value={DietPreference.LOW_CARB}>
                              Low Carb
                            </MenuItem>
                            <MenuItem value={DietPreference.PESCATARIAN}>
                              Pescatarian
                            </MenuItem>
                            <MenuItem value={DietPreference.VEGAN}>
                              Vegan
                            </MenuItem>
                            <MenuItem value={DietPreference.VEGETARIAN}>
                              Vegetarian
                            </MenuItem>
                          </Select>
                        </>
                      );
                    }}
                  </Field>
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

export default MealPlannerForm;
