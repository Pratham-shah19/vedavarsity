'use client';

import { useEffect, useState } from 'react';
import CourseListingSection from 'components/home/CourseListingSection';
import NewsLetterSection from 'components/home/NewsLetterSection';
import { parse } from 'node-html-parser';
import courseTypeMap from '../data/courseTypeMap';
import { API_URL } from '../data/constants';
import { TestimonialsCarousel } from '../components/testimonials/TestimonialCarousel';
import CourseLibrary from '@/src/components/home/CourseLibrary';
import axios from 'axios';

export default function Home() {
  const [liveCourses, setLiveCourses] = useState([]);
  const [selfPacedCourses, setSelfPacedCourses] = useState([]);
  const [schoolOfLoveCourses, setSchoolOfLoveCourses] = useState([]);
  const [communityLinks, setCommunityLinks] = useState({ whatsapp: '', telegram: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch website data
        const { data: website_data } = await axios.get(
          `${API_URL}/organization/bundles/39893?get_tags=1`
        );

        // Fetch course data
        const [liveCoursesRes, selfPacedCoursesRes, schoolOfLoveCoursesRes] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap['live-courses']}`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap['self-paced-courses']}`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1&categories_ids=${courseTypeMap['school-of-love']}`
          )
        ]);

        setLiveCourses(liveCoursesRes.data?.institute_courses[0]?.course_bundles || []);
        setSelfPacedCourses(selfPacedCoursesRes.data?.institute_courses[0]?.course_bundles || []);
        setSchoolOfLoveCourses(
          schoolOfLoveCoursesRes.data?.institute_courses[0]?.course_bundles || []
        );

        // Extract and parse community links
        let communityLinksRaw = website_data.tags
          .filter((t) => t.id === 132)[0]
          ['value'][0].replace(/[<]br[^>]*[>]/gi, '');

        const doc = parse(communityLinksRaw);

        setCommunityLinks({
          whatsapp: doc.querySelector('#whatsapp-link')?.innerHTML || '',
          telegram: doc.querySelector('#telegram-link')?.innerHTML || ''
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <img src="/hero_banner.jpg" alt="Hero Banner" />
      <CourseListingSection liveCourses={liveCourses} schoolOfLoveCourses={schoolOfLoveCourses} />
      <CourseLibrary />
      <NewsLetterSection />
      <TestimonialsCarousel />
    </>
  );
}
