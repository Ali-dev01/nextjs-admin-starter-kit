"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      const currentPath = window.location.pathname;
      if (currentPath !== "/sign-in") {
        const searchParams = new URLSearchParams({
          returnTo: currentPath + window.location.search,
        }).toString();
        const loginUrl = `/sign-in?${searchParams}`;
        router.replace(loginUrl);
      }
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}

