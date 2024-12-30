'use client';
import { subTitles } from '@/src/data/courseSubTitles';
import courseTypeMap from '@/src/data/courseTypeMap';
import { categoriesID, languageTagID } from '@/src/data/tags';
import axios from 'axios';
import CourseTabs, { coursesAtom } from 'components/listing/CourseTabs';
import Hero from 'components/listing/Hero';
import { useAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'ISKCON Board Of Examination Courses | Certificate Courses',
//   description:
//     'Enrol in ISKCON Board Courses to deepen your understanding of spiritual wisdom through Bhagavad Gita, Iskcon Disciple Course, and Bhakti Shastri studies.'
// };
export default function CourseDescription() {
  const [vedvarsity, setVedvarsity] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);
  const { title } = useParams();

  const fetchCourse = async () => {
    console.log('Fetching courses...');
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/institute/${process.env.NEXT_PUBLIC_INST_ID}/courses?get_tutors=1&get_tags=1&get_student_count=1`
      );

      const data = response.data;
      console.log('API data:', data);

      const courses = data.institute_courses[0]?.course_bundles?.filter(
        (course) => course.course_type === courseTypeMap[title]
      );

      setVedvarsity(courses || []);
      setAllTeachers(data.tutors || []);
      setAllCategories(data.tags.filter((tag) => tag.tag_categories_id === categoriesID) || []);
      setAllLanguages(data.tags.filter((tag) => tag.tag_categories_id === languageTagID) || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    console.log('Title:', title);
    if (title) {
      fetchCourse();
    }
  }, [title]);

  const [vedvarsityCourses] = useAtom(coursesAtom);

  const filtered =
    vedvarsityCourses != null
      ? vedvarsityCourses.institute_courses[0]?.course_bundles?.filter(
          (course) => course.course_type === courseTypeMap[title]
        )
      : null;

  return (
    <>
      <Hero subTitle={subTitles[title]} searchBased={title.split('-').join(' ')} />
      {vedvarsity.length > 0 && (
        <CourseTabs
          courses={filtered || vedvarsity}
          title={title.split('-').join(' ')}
          allTeachers={allTeachers}
          allCategories={allCategories[0]?.tag_categories_values || []}
          allLanguages={allLanguages[0]?.tag_categories_values || []}
        />
      )}
    </>
  );
}
