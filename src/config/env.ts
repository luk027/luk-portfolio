import packageJson from "../../package.json";

const appEnvironments = ["development", "production"] as const;

type AppEnvironment = (typeof appEnvironments)[number];

const configuredAppEnvironment = process.env.NEXT_PUBLIC_APP_ENV;

const appEnv: AppEnvironment = appEnvironments.includes(
  configuredAppEnvironment as AppEnvironment,
)
  ? (configuredAppEnvironment as AppEnvironment)
  : "development";

export const env = {
  appEnv,
  isDevelopment: appEnv === "development",
  isProduction: appEnv === "production",
  version: packageJson.version,
} as const;

export type { AppEnvironment };
