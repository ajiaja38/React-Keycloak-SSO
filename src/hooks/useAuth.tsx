import Keycloak from "keycloak-js";
import { useEffect, useRef, useState } from "react";

const client: Keycloak = new Keycloak({
  url: import.meta.env.APP_KEYCLOAK_URL,
  realm: import.meta.env.APP_KEYCLOAK_REALM,
  clientId: import.meta.env.APP_KEYCLOAK_CLIENT_ID,
});

const useAuth = (): { isLogin: boolean } => {
  const isRun: React.MutableRefObject<boolean> = useRef<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    client.init({ onLoad: "login-required" }).then((auth: boolean) => {
      setIsLogin(auth);
    });
  }, []);

  return {
    isLogin,
  };
};

export default useAuth;
