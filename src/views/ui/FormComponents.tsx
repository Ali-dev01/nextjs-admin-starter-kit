/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Divider, Grid2 as Grid, Typography } from "@mui/material";

import RHFTextField from "@/components/RHF/RHFTextField";
import RHFSelectField from "@/components/RHF/RHFSelectField";
import RHFAutoComplete from "@/components/RHF/RHFAutoComplete";
import RHFSwitch from "@/components/RHF/RHFSwitch";
import RHFRadioGroup from "@/components/RHF/RHFRadioGroup";

const cityOptions = [
  {
    name: "Lahore",
    value: "lahore",
  },
  {
    name: "Gujranwala",
    value: "grw",
  },
  {
    name: "Faislabad",
    value: "fsd",
  },
];

const countryOptions = [
  {
    name: "United Kingdom",
    value: "uk",
  },
  {
    name: "Australia",
    value: "aus",
  },
  {
    name: "France",
    value: "fr",
  },
  {
    name: "China",
    value: "china",
  },
  {
    name: "Spain",
    value: "esp",
  },
];

const radioOptionis = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

const defaultValues = {
  name: "",
  password: "",
  age: '',
  city: '',
  country: null,
  agree: false,
  gender: ''
};

const FormComponents = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Minimum 4 characters required")
      .max(25, "Maximum 25 characters allowed"),
    password: yup.string().required("Password is required"),
    age: yup.string().required("Age is required")
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    alert("Form Submitted");
  };

  return (
    <>
      <Box my={4}>
        <Typography variant="h2" color="text.primary" mb={2}>
          Form Inputs and Validations
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <RHFTextField
              control={control}
              name="name"
              type="text"
              label="Text Field"
              placeholder="Enter Name"
              errors={errors}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <RHFTextField
              control={control}
              name="password"
              type="password"
              label="Password Field"
              placeholder="Enter Password"
              errors={errors}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <RHFTextField
              control={control}
              name="age"
              type="number"
              label="Number Field"
              placeholder="Enter Age"
              errors={errors}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={4}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <RHFSelectField
              control={control}
              name="city"
              label="Select Field"
              options={cityOptions}
              placeholder="Select City"
              defaultValue={1}
              errors={errors}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <RHFAutoComplete
              control={control}
              options={countryOptions}
              name="country"
              label="Autocomplete Field"
              placeholder="Select Country"
              errors={errors}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} mt={3}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 5 }}>
                <RHFSwitch
                  control={control}
                  name="agree"
                  label="Switch Fields"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 7 }}>
                <RHFRadioGroup
                  control={control}
                  name="gender"
                  label="Radio Field"
                  options={radioOptionis}
                  row
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default FormComponents;
