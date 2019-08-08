import {http} from "../../lib/http"

export const fetchDeveloperHistory = (name: string) =>
  http(`/developer-history/${name}`);
