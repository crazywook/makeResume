import {http} from "../../lib/http"

export function fetchProjects() {
  return http("/projects");
}
