import CourseListingSection from 'components/home/CourseListingSection';
import NewsLetterSection from 'components/home/NewsLetterSection';
import { parse } from 'node-html-parser';
import courseTypeMap from '../data/courseTypeMap';
import { API_URL } from '../data/constants';
import { TestimonialsCarousel } from '../components/testimonials/TestimonialCarousel';
import WelcomeSection from '../components/home/Welcome';
import CourseLibrary from '@/src/components/home/CourseLibrary';
import axios from 'axios';

export default async function Home() {
  const { data: website_data } = await axios.get(
    `${API_URL}/organization/bundles/39893?get_tags=1`
  );

  let { data: liveCoursesRaw } = await axios.get(
    `${process.env.API_URL}/institute/${process.env.INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap['live-courses']}`
  );
  let { data: selfPacedCoursesRaw } = await axios.get(
    `${process.env.API_URL}/institute/${process.env.INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap['self-paced-courses']}`
  );

  let { data: schoolOfLoveCoursesRaw } = await axios.get(
    `${process.env.API_URL}/institute/${process.env.INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap['school-of-love']}`
  );
  let liveCourses = liveCoursesRaw?.institute_courses[0]?.course_bundles;
  let selfPacedCourses = selfPacedCoursesRaw?.institute_courses[0]?.course_bundles;
  let schoolOfLoveCourses = schoolOfLoveCoursesRaw?.institute_courses[0]?.course_bundles;

  //get tag community value and remove br tag
  let community_links = website_data.tags
    .filter((t) => t.id === 132)[0]
    ['value'][0].replace(/[<]br[^>]*[>]/gi, '');

  //parse link to dom
  var doc = parse(community_links);

  community_links = {
    whatsapp: doc.querySelector('#whatsapp-link').innerHTML,
    telegram: doc.querySelector('#telegram-link').innerHTML
  };

  return (
    <div className="">
      <WelcomeSection />
      <CourseListingSection liveCourses={liveCourses} schoolOfLoveCourses={schoolOfLoveCourses} />
      <CourseLibrary />
      <NewsLetterSection />
      <TestimonialsCarousel />
    </div>
  );
}
