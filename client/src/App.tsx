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

  return (
    <>
      <h1 className="text-3xl">Rutgers Course Viewer</h1>
      <ul>
        {courses?.map((course, i) => (
          <li key={i}>Title: {course.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
