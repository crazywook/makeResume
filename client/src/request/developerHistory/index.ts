import {http} from "../../lib/http"

export const fetchDeveloperHistory = () =>
  http("/developer-history")
    .catch(e => ({
      error: e
    }));
