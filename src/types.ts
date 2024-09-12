export type User = {
  username?: string;
  password?: string;
  email?: string;
  forgotPw?: boolean;
};

export interface ApiResponse {
  status: string;
  message?: string;
}

export interface UserResponse extends ApiResponse {
  data?: User;
}

export interface RequestHeaders {
  'Content-type'?: string;
  Authorization?: string;
}

export interface RequestOptions {
  method: string;
  credentials: 'include';
  headers?: RequestHeaders;
  body?: string;
}
