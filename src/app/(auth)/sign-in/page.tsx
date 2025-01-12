"use client";

import React from "react";
import BlankLayout from "@/layouts/blank-layout";
import { withGuestGuard } from "@/hoc/with-guest-guard";

const SignIn = () => {
  return (
    <BlankLayout>
      <h1>Sign In</h1>
    </BlankLayout>
  );
};

export default withGuestGuard(SignIn);
