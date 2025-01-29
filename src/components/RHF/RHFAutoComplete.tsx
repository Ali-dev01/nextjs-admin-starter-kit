/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
import { FormControl, InputLabel, FormHelperText } from "@mui/material";

import { ISelect_Type } from "./types";

interface IProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  errors: any;
  options: ISelect_Type[];
  multiple?: boolean;
}

const RHFAutoComplete = (props: IProps) => {
  const {
    control,
    name,
    label,
    placeholder = "",
    errors,
    options,
    multiple = false,
  } = props;

  return (
    <>
      <InputLabel sx={{ color: "text.primary" }}>{label}</InputLabel>
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Autocomplete
              multiple={multiple}
              options={options}
              limitTags={1}
              size="small"
              getOptionLabel={(option) => option.name}
              value={value || (multiple ? [] : null)}
              onChange={(_, data) => {
                // If multiple is true, filter out duplicates
                if (multiple) {
                  const uniqueData = data.filter(
                    (option: ISelect_Type, index: number) =>
                      data.findIndex(
                        (opt: ISelect_Type) => opt.name === option.name
                      ) === index
                  );
                  onChange(uniqueData);
                } else {
                  onChange(data);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={errors?.[name]?.message}
                  placeholder={placeholder}
                  size="small"
                />
              )}
            />
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

export default RHFAutoComplete;
