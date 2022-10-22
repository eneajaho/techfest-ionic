export interface AuthUser {
  id: number;
  name: string;
  email: string;
  auth: { token: string };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
}
