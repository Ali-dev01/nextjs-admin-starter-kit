import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <h4>Dashboard</h4>
      <Link href="/profile">Profile</Link> <br />
      <Link href="/sign-in">Sign In</Link>
      <br />
    </>
  );
};

export default Dashboard;
