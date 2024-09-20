export type User = {
  username: string;
  password?: string;
  email?: string;
  forgotPw?: boolean;
  token?: string;
};

export interface ApiResponse {
  status: string;
  message?: string;
}

export interface UserResponse extends ApiResponse {
  data?: User;
}
