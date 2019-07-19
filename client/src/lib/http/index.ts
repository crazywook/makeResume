export function http<R>(url: string, method: string = "get"):
  Promise<{
    response?: R;
    error?: string;
  }>
{
  return fetch(url, { method })
    .then(r => {
      if (r.ok) {
        return { response: r.json() as any as R };
      }
      return { error: r.statusText };
    });
}
