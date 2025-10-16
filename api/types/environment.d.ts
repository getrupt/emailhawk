import type { HydratedDocument } from "mongoose";
import type User from "../../common/models/User";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
    }
  }
  namespace Express {
    interface User {
      id: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
