export function requestProjects() {
  return fetch("http://localhost:3000")
    .then(r => r.ok
      ? {projects: r.json()}
      : {error: r}
    );
}
