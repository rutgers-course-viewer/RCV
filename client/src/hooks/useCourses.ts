import useSWR from "swr";

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json() as Promise<JSON>;
}

export function useCourses() {
  const { data, error, isLoading } = useSWR("/api/course", fetcher);

  return {
    courses: data,
    isError: error,
    isLoading,
  };
}
