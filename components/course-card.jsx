import Image from 'next/image'
import { Award } from 'lucide-react'

export function CourseCard({
  title,
  instructor,
  hours,
  startDate,
  category,
  status,
  imageUrl
}) {
  return (
    (<div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          <p className="text-gray-600">{instructor}</p>
        </div>

        <div className="flex justify-end">
          <span
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              status === 'PAID' 
                ? 'bg-orange-100 text-orange-500' 
                : 'bg-emerald-100 text-emerald-500'
            }`}>
            {status}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">{hours} Hours</span>
          <span className="text-red-500">Start date - {startDate}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">{category}</span>
          <div className="flex items-center gap-1 text-orange-400">
            <Award className="h-4 w-4" />
            <span>Certificate Course</span>
          </div>
        </div>

        <button
          className="w-full py-2.5 px-4 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>)
  );
}

