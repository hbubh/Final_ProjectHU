import { IShare, IShareS } from "./share";
import { IJWTPayload, IUser } from "./user";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      share?: IShareS;
      sharePrice?: any[];
    }
  }
}
