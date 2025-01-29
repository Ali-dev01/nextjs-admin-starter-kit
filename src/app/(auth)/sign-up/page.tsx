"use client";

import React from "react";

import BlankLayout from "@/layouts/blank-layout";
import { withGuestGuard } from "@/hoc/with-guest-guard";

const SignUp = () => {
  return (
    <BlankLayout>
      <h3>Sign Up</h3>
    </BlankLayout>
  );
};

export default withGuestGuard(SignUp);
