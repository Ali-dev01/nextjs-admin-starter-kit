"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface GuestGuardProps {
  children: ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const router = useRouter();
  const { user, initialLoading } = useAuth();
  const searchParams = useSearchParams();

  const returnUrl = searchParams.get("returnTo");

  useEffect(() => {
    if (user) {
      router.replace(returnUrl || "/dashboard");
    }
  }, [user, router]);

  if (user || initialLoading) {
    return <div>Loading...</div>;
  }

  return <>{!user && children}</>;
}
