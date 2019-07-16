export function requestResume() {
  return fetch("/api/resume")
    .then(r => r.json());
}
