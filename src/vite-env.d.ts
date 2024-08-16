/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_KEYCLOAK_URL: string;
  readonly APP_KEYCLOAK_REALM: string;
  readonly APP_KEYCLOAK_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
