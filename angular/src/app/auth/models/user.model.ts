export interface User {
    id?: String;
    firstname?: string;
    lastname?: string;
    email: string;
    password?: string;
    password2?: string;
}

export interface LoginResponse {
  isAuth: boolean;
  user: User;
}
export interface SignupResponse {
  success: boolean;
  user: User;
}
