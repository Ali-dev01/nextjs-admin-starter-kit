/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, Switch } from "@mui/material";

interface IProps {
  control: any;
  name: string;
  label: string;
}

const RHFSwitch = (props: IProps) => {
  const { control, name, label } = props;

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            label={label}
            control={<Switch onChange={onChange} checked={Boolean(value)} />}
          />
        )}
      />
    </FormControl>
  );
};

export default RHFSwitch;
