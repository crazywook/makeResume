import {development} from "./development"

const ConfigNamespace = {
  development
}

export interface Config {
  mongo?: {
    username: string
    password: string
  }
}

const env = (process.env.NODE_ENV) === "prod"
  ? "production"
  : "development"

export const config: Config = ConfigNamespace[env]
