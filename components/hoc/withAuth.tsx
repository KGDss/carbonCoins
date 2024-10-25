// withAuth.tsx
import React, { useEffect } from "react";
import { AuthService } from "@/components/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/components/context/authContext";

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { setAuthData } = useAuth();
    const router = useRouter();

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

        setAuthData({
          isAuthenticated: res.isAuthenticated,
          username: res.username,
        });
      };

      checkAuthStatus();
    }, [router, setAuthData]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};
