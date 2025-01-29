/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

interface IProps {
  control: any;
  name: string;
  label: string;
}

const RHFCheckbox = (props: IProps) => {
  const { control, name, label } = props;

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            label={label}
            control={<Checkbox onChange={onChange} checked={Boolean(value)} />}
          />
        )}
      />
    </FormControl>
  );
};

export default RHFCheckbox;
