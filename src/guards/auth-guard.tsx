/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const path = usePathname();
  const { user, initialLoading } = useAuth();

  useEffect(() => {
    if (!user && !initialLoading) {
      
      // If already on /sign-in, do not append returnUr
      if (path !== "/sign-in") {
        const searchParams = new URLSearchParams();
        searchParams.set("returnTo", path + window.location.search);
        router.replace(`/sign-in?${searchParams.toString()}`);
      } else {
        router.replace("/sign-in");
      }
    }
  }, [router, initialLoading]);

  if (!user || initialLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
