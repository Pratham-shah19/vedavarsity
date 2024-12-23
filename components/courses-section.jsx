'use client'

import { useState, useEffect } from 'react'
import { CourseCard } from './course-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs } from './ui/tabs'

const COURSES = [
  {
    title: "ISKCON Disciple Course (English)",
    instructor: "By Narsimha Avatar Das",
    hours: 10,
    startDate: "Oct 02",
    category: "Bhakti",
    status: "PAID",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "ISKCON Disciple Course (English)",
    instructor: "By Narsimha Avatar Das",
    hours: 10,
    startDate: "Oct 02",
    category: "Bhakti",
    status: "FREE",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "ISKCON Disciple Course (English)",
    instructor: "By Narsimha Avatar Das",
    hours: 10,
    startDate: "Oct 02",
    category: "Bhakti",
    status: "PAID",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Bhagavad Gita Overview",
    instructor: "By Krishna Priya Devi",
    hours: 15,
    startDate: "Oct 15",
    category: "Scripture",
    status: "PAID",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Introduction to Vedic Philosophy",
    instructor: "By Radha Gopinath Das",
    hours: 12,
    startDate: "Oct 20",
    category: "Philosophy",
    status: "FREE",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Bhakti Yoga Fundamentals",
    instructor: "By Govinda Dasa",
    hours: 8,
    startDate: "Nov 01",
    category: "Yoga",
    status: "PAID",
    imageUrl: "/placeholder.svg?height=300&width=400"
  }
]

const TABS = ["Upcoming Courses", "Past Courses", "Featured Courses"]

export function CoursesSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [activeTab, setActiveTab] = useState(TABS[0])
  const coursesPerPage = 3
  const pageCount = Math.ceil(COURSES.length / coursesPerPage)

  const visibleCourses = COURSES.slice(currentPage * coursesPerPage, (currentPage + 1) * coursesPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevPage()
      } else if (event.key === 'ArrowRight') {
        nextPage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  }, [])

  return (
    (<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={currentPage}>
            <motion.div
              key={currentPage}
              custom={currentPage}
              variants={{
                enter: (direction) => ({
                  x: direction > 0 ? 1000 : -1000,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (direction) => ({
                  x: direction < 0 ? 1000 : -1000,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous page">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next page">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index ? 'bg-blue-600' : 'bg-blue-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentPage(index)} />
          ))}
        </div>
      </div>
    </section>)
  );
}

