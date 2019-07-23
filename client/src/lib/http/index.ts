// FIXME: 객체로 만들고 get, put 등 메서드를 따로 만들어야 한다.
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
