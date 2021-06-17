export class User {
  id!: number;
  name!: string;
  email!: string;
  role!: string;
  address!: string;
  telNumber!: string;
  createdAt!: Date;
  jwtToken?: string;
}
