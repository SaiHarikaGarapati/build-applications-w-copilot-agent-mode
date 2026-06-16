import type { User } from '../models/user';
import type { Team } from '../models/team';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      team?: Team;
    }
  }
}
