"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const HomePage = () => {
  const router = useRouter();
  const { user, initialLoading } = useAuth();

  useEffect(() => {
    if (!initialLoading) {
      if (user) {
        router.replace("/dashboard");
      } else {
        router.replace("/sign-in");
      }
    }
  }, [user, initialLoading]);

  return <div>Loading...</div>;
};

export default HomePage;
