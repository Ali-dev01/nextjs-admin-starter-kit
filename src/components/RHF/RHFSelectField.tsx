/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel } from "@mui/material";
import { FormHelperText, Select, MenuItem } from "@mui/material";

import { ISelect_Type } from "./types";

interface IProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  errors: any;
  options: ISelect_Type | any;
}

const RHFSelectField = (props: IProps) => {
  const {
    control,
    name,
    label,
    placeholder = "",
    defaultValue = "",
    errors,
    options,
  } = props;

  return (
    <>
      <InputLabel sx={{ color: "text.primary" }}>{label}</InputLabel>
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { value, onChange } }) => (
            <Select
              size="small"
              value={value || defaultValue}
              onChange={onChange}
              error={errors?.[name]?.message}
              displayEmpty
            >
              <MenuItem sx={styles.disabledMenuStyle} value="" disabled>
                {placeholder}
              </MenuItem>

              {options?.map((option: ISelect_Type, i: number) => (
                <MenuItem key={i} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors?.[name] && (
          <FormHelperText sx={{ color: "error.main", ml: 0 }}>
            {errors?.[name]?.message}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default RHFSelectField;

const styles = {
  disabledMenuStyle: {
    "&.Mui-selected.Mui-disabled": {
      background: "transparent !important",
      color: "inherit !important",
    },
  },
};
