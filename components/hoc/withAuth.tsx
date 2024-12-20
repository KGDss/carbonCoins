// withAuth.tsx
import React, { useEffect } from "react";
import { AuthService } from "@/components/services/auth";
import { useParams, usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/components/context/authContext";

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { setAuthData } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      const checkAuthStatus = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Unauthorized");
          router.push("/");
          return;
        }

        const res = await AuthService.status(token);

        if (!res.isAuthenticated) {
          toast.error("Unauthorized");
          router.push("/");
          return;
        }

        if (pathname.split("/")[1] != res.role?.toLocaleLowerCase()) {
          router.push("/");
          toast.error("Unauthorized");
          return;
        }

        setAuthData({
          isAuthenticated: res.isAuthenticated,
          id: res.id,
          username: res.username,
          used_coins: res.used_coins,
          role: res.role,
          wallet_address: res.wallet_address,
        });
      };

      checkAuthStatus();
    }, [pathname, router, setAuthData]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};
