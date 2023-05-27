import useSWR from "swr";

const filterWords = ["II", "III", "IV", "VI", "VII", "IX", "XI"];

function convertToTitleCase(courseTitle: string) {
  return courseTitle
    .trim()
    .split(" ")
    .map((w) => {
      if (filterWords.includes(w)) {
        return w;
      }

      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

interface MinimalCourse {
  title: string;
}

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json() as Promise<JSON>;
}

export function useCourses() {
  const { data, error, isLoading } = useSWR<MinimalCourse[], Error>(
    "/api/course",
    fetcher
  );

  const transformedCourses = data?.map((course) => ({
    title: convertToTitleCase(course.title),
  }));

  return {
    courses: transformedCourses,
    isError: error,
    isLoading,
  };
}
