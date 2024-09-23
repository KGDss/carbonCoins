export type Login = {
  username: string;
  password: string;
};

export type RegisterDto = Login & {
  email: string;
};
