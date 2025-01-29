/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import * as yup from "yup";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, Stack, Typography } from "@mui/material";

import useAuth from "@/hooks/useAuth";
import BlankLayout from "@/layouts/blank-layout";
import RHFCheckbox from "@/components/RHF/RHFCheckbox";
import { withGuestGuard } from "@/hoc/with-guest-guard";
import RHFTextField from "@/components/RHF/RHFTextField";

const defaultValues = {
  email: "",
  password: "",
  isRememberMe: false,
};

const SignIn = () => {
  const router = useRouter();
  const { login } = useAuth();
  const searchParams = useSearchParams()

  const returnUrl = searchParams.get('returnTo')

  const schema = yup.object().shape({
    email: yup.string().email("Enter Valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    try {
      const response = await login(values);

      if (response && typeof response === "object" && response.id) {
        toast.success("Logged in successfully!");
        router.push(returnUrl || "/dashboard");
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login!");
    }
  };

  return (
    <BlankLayout>
      <Card sx={{ p: 4 }}>
        <Stack gap={0.5}>
          <Typography variant="h4" color="text.primary">
            Welcome Back! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Please Login to your account and start the adventure.
          </Typography>
        </Stack>

        <Stack gap={3} mt={3}>
          <Box>
            <RHFTextField
              control={control}
              name="email"
              type="text"
              label="Email"
              placeholder="Enter your email"
              errors={errors}
            />
          </Box>

          <Box>
            <RHFTextField
              control={control}
              name="password"
              type="password"
              label="Password"
              placeholder="Enter password"
              errors={errors}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RHFCheckbox control={control} name="isRememberMe" label="Remember Me" />

            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="body1" color="primary.main">
                Forgot Password?
              </Typography>
            </Link>
          </Box>

          <Button variant="contained" sx={{ display: "block" }} onClick={handleSubmit(onSubmit)}>
            Sign in
          </Button>
        </Stack>

        <Box mt={2} textAlign="center">
          <Typography variant="body1" color="text.secondary">
            New on our platform?{" "}
            <Typography component="span" color="primary.main">
              <Link href="sign-up">Create an accout</Link>
            </Typography>
          </Typography>
        </Box>
      </Card>
    </BlankLayout>
  );
};

export default withGuestGuard(SignIn);
