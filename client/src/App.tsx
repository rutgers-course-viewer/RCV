import "./App.css";
import { useCourses } from "./hooks/useCourses";

function App() {
  const { courses, isError, isLoading } = useCourses();

  if (isError) {
    return <div>Failed to load courses!</div>;
  }

  if (isLoading) {
    return <div>Loading courses...</div>;
  }

  console.log(courses);

  return (
    <>
      <h1 className="text-3xl">Rutgers Course Viewer</h1>
    </>
  );
}

export default App;
