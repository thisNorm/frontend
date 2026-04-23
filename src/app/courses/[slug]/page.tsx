import { notFound } from "next/navigation";

import { CoursePage } from "@/components/course-page";
import { getCourseData, getCourseList, translateCourse, translateCourseList } from "@/lib/courses";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const [{ course, error }, courseList] = await Promise.all([getCourseData(slug), getCourseList()]);

  if (!course) {
    notFound();
  }

  const translatedCourse = translateCourse(course);
  const otherCourses = translateCourseList(courseList).filter((item) => item.slug !== slug);

  return <CoursePage course={translatedCourse} otherCourses={otherCourses} error={error} isDetailPage />;
}
