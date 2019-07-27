import {http} from "../../lib/http";

export const fetchDeveloperHistory = () =>
  http("/api/developer-history")
    .catch(e => ({
      error: e
    }));
