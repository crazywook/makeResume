import {http} from "../../lib/http";

export const fetchDeveloperHistory = () =>
  http("http://localhost:3000/api/developer-history")
    .catch(e => ({
      error: e
    }));
