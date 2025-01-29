/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, TextField } from "@mui/material";
import { FormHelperText, InputAdornment, Box } from "@mui/material";

interface IProps {
  control: any;
  name: string;
  label?: string;
  multiline?: boolean;
  placeholder: string;
  errors?: any;
  type: string;
}

const RHFTextField = (props: IProps) => {
  const {
    control,
    name,
    label = "",
    placeholder,
    errors,
    multiline = false,
    type = "text",
  } = props;

  const [isPassShown, setIsPassShown] = useState(false);

  return (
    <>
      {label && <InputLabel sx={{ color: "text.primary" }}>{label}</InputLabel>}

      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              placeholder={placeholder}
              error={errors?.[name]?.message}
              size="small"
              multiline={multiline}
              rows={multiline ? 3 : 1}
              type={
                type === "password" ? (isPassShown ? "text" : "password") : type
              }
              value={value}
              onChange={(e) => {
                const newValue = e.target.value;
                if (type === "number") {
                  const numberValue = Number(newValue);
                  if (numberValue >= 0) {
                    onChange(newValue);
                  } else {
                    onChange("");
                  }
                } else {
                  onChange(newValue);
                }
              }}
              slotProps={{
                ...(type === "password" && {
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          sx={{ cursor: "pointer", display: "flex" }}
                          onClick={() => setIsPassShown(!isPassShown)}
                        >
                          <Icon
                            icon={`${
                              isPassShown ? "tabler:eye" : "tabler:eye-off"
                            }`}
                            fontSize={20}
                          />
                        </Box>
                      </InputAdornment>
                    ),
                  },
                }),
                ...(type === "number" && {
                  input: {
                    onKeyDown: (e: any) => {
                      if (e.key === "-" || e.key === "e") {
                        e.preventDefault();
                      }
                    },
                  },
                }),
              }}
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

export default RHFTextField;
