declare namespace Express {
  export interface Request {
    serviceUrl: string;
    serviceMethod: string;
    servicePath: string;
    code: string;
    user: string;
    originalIp: string;
    originalToken: string;
    originalMethod: string;
    originalPath: string;
    originalUserAgent: string;
    originalHost: string;
  }
}
