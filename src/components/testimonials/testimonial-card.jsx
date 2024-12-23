import Image from 'next/image';
import { cn } from '@/lib/utils';

export function TestimonialCard({ quote, name, image, isActive = false, className }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center transition-all duration-300',
        'scale-100 opacity-100',
        className
      )}>
      {!isActive && (
        <div className={cn('relative mb-4', 'h-24 w-24')}>
          <Image
            src={image}
            alt={`${name}'s profile picture`}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
      {isActive && (
        <div className="text-center">
          <div className="relative max-w-md rounded-lg border-2 border-yellow-300 p-6">
            <div className={'absolute inset-x-0 -top-12  mx-auto h-24 w-24'}>
              <Image
                src={image}
                alt={`${name}'s profile picture`}
                fill
                className="rounded-full border-2 border-primary object-cover"
              />
            </div>
            <h3 className="mb-4 mt-10 text-xl font-semibold">{name}</h3>
            <p className="font-serif text-xl">{quote}</p>
          </div>
        </div>
      )}
    </div>
  );
}
