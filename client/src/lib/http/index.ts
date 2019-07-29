// FIXME: 객체로 만들고 get, put 등 메서드를 따로 만들어야 한다.
export async function http<R>(url: string, method: string = "get"):
  Promise<{
    data?: R;
    error?: string;
  }>
{
  const result = await fetch(url, { method });

  if (result.ok) {
    const data = await result.json();
    return {data};
  }

  return {
    error: result.statusText
  };
}
