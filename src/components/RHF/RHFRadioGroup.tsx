/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller } from "react-hook-form";
import { RadioGroup, Radio, InputLabel } from "@mui/material";
import { FormControl, FormControlLabel } from "@mui/material";

interface RadioOption {
  label: string;
  value: string | number;
}

interface IProps {
  control: any;
  name: string;
  label: string;
  options: RadioOption[];
  row?: boolean; // To support row layout
}

const RHFRadioGroup: React.FC<IProps> = (props) => {
  const { control, name, label, options, row = false } = props;

  return (
    <>
      <InputLabel sx={{ color: "text.primary" }}>{label}</InputLabel>
      <FormControl>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <RadioGroup row={row} value={value} onChange={onChange}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
    </>
  );
};

export default RHFRadioGroup;
