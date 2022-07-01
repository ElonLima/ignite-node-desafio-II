import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  admin: boolean;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(name: string, email: string) {
    if (!this.created_at) {
      this.created_at = new Date();
    }

    this.id = uuidV4();
    this.admin = false;
    this.name = name;
    this.email = email;
    this.updated_at = new Date();
  }
}

export { User };
