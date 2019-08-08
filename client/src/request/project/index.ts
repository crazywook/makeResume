import {http} from "../../lib/http"

export function fetchProjects(name?: string) {
  return http(`/projects/${name}`);
}
