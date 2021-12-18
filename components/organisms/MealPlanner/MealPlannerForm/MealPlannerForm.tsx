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
import { FormState } from "../types";
import validate from "./validate";

interface MealPlannerFormProps {}

const MealPlannerForm = ({}: MealPlannerFormProps) => {
  const { calculateResults, results } = useContext(MealPlannerContext);
  const initialValues: Partial<FormState> = {
    age: 25,
    gender: "female",
    weight: 120,
    heightFt: 5,
    heightIn: 5,
    water: 5,
    activity: "moderate",
    goal: "bodyRecomp",
    dietPreference: "vegan",
  };

  const onSubmit = (vals: FormState) => {
    console.log("vals", vals);
    calculateResults(vals);
  };

  console.log("results", results);

  return (
    <Box mt={3} mb={8}>
      <Form<FormState>
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
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="male">Male</MenuItem>
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
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="moderate">Moderate</MenuItem>
                            <MenuItem value="high">High</MenuItem>
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
                            <MenuItem value="weightLoss">Weight Loss</MenuItem>
                            <MenuItem value="improveHealth">
                              Improve Health
                            </MenuItem>
                            <MenuItem value="bodyRecomp">
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
                            <MenuItem value="anything">Anything</MenuItem>
                            <MenuItem value="ethnicSpecific">
                              Ethnic Specific
                            </MenuItem>
                            <MenuItem value="glutenFree">Gluten Free</MenuItem>
                            <MenuItem value="keto">Keto - High Fat</MenuItem>
                            <MenuItem value="lowCard">Low Carb</MenuItem>
                            <MenuItem value="pescatarian">Pescatarian</MenuItem>
                            <MenuItem value="vegan">Vegan</MenuItem>
                            <MenuItem value="vegetarian">Vegetarian</MenuItem>
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
