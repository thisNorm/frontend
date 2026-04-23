import { CoursePage } from "@/components/course-page";
import {
  fallbackCourse,
  getCourseData,
  getCourseList,
  translateCourse,
  translateCourseList,
} from "@/lib/courses";

export default async function Home() {
  const [{ course, error }, courseList] = await Promise.all([getCourseData(), getCourseList()]);

  const translatedCourse = translateCourse(course ?? fallbackCourse);
  const otherCourses = translateCourseList(courseList).filter(
    (item) => item.slug !== translatedCourse.overview.slug,
  );

  return <CoursePage course={translatedCourse} otherCourses={otherCourses} error={error} />;
}
