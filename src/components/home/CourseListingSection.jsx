'use client';
import { CategoryHeading } from 'components/shared/Headings';
import CourseFilterTab from './CourseFilterTab';

const CourseListingSection = ({ liveCourses, selfPacedCourses }) => {
  return (
    <section className="bg-cloud" id="courses">
      <div className="m-auto max-w-6xl px-4 py-12">
        <CategoryHeading libraryLink="/live-courses" title="Live courses" />
        <CourseFilterTab instituteCourses={liveCourses} title="Live courses" />

        <div className="my-8 lg:my-16"></div>

        <CategoryHeading libraryLink="/self-paced-courses" title="Self paced courses" />
        <CourseFilterTab instituteCourses={selfPacedCourses} title="Self paced courses" />
      </div>
    </section>
  );
};

export default CourseListingSection;