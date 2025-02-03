'use client';
import { CategoryHeading } from 'components/shared/Headings';
import CourseFilterTab from './CourseFilterTab';

const CourseListingSection = ({ liveCourses, schoolOfLoveCourses }) => {
  return (
    <section className="bg-cloud" id="courses">
      <div className="m-auto max-w-6xl px-4 py-12">
        <CategoryHeading libraryLink="/bhaktiyoga" title="Bhaktiyoga" />
        <CourseFilterTab instituteCourses={liveCourses} title="Bhaktiyoga" />

        <div className="my-12 lg:my-16"></div>

        <CategoryHeading libraryLink="/lifestyle" title="Lifestyle" />
        <CourseFilterTab instituteCourses={schoolOfLoveCourses} title="Lifestyle" />
        {/* <CategoryHeading libraryLink="/self-paced-courses" title="Self paced courses" />
        <CourseFilterTab instituteCourses={selfPacedCourses} title="Self paced courses" /> */}
      </div>
    </section>
  );
};

export default CourseListingSection;
