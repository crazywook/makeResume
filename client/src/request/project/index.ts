export function fetchProjects() {
  return fetch("/api/projects")
    .then(r => r.ok
      ? {projects: r.json()}
      : {error: r}
    );
}
