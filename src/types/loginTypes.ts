export interface LoginResponse {
 token: string;
 user: {
  id: number;
  username: string;
 };
}

export interface LoginData {
 username: string;
 password: string;
}
