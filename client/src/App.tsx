import "./App.css";
import useSWR from "swr";

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json() as Promise<JSON>;
}

function App() {
  const { data, error, isLoading } = useSWR("/api/course", fetcher);

  if (error) {
    return <div>Failed to load courses!</div>;
  }

  if (isLoading) {
    return <div>Loading courses...</div>;
  }

  console.log(data);

  return (
    <>
      <h1 className="text-3xl">Rutgers Course Viewer</h1>
    </>
  );
}

export default App;
