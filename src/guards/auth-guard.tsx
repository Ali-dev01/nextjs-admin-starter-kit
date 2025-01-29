"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { user, initialLoading } = useAuth();

  useEffect(() => {
    if (!user && !initialLoading) {
      const currentPath = window.location.pathname;

      // If already on /sign-in, do not append returnTo
      if (currentPath !== "/sign-in") {
        const searchParams = new URLSearchParams();
        searchParams.set("returnTo", currentPath + window.location.search);
        router.replace(`/sign-in?${searchParams.toString()}`);
      } else {
        router.replace("/sign-in");
      }
    }
  }, [user, router, initialLoading]);

  if (!user || initialLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
