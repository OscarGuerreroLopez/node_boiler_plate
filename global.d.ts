export {};

declare global {
  interface EnvObject {
    PORT: number;
    REDIS_PORT: number;
    REDIS_HOST: string;
  }
}
