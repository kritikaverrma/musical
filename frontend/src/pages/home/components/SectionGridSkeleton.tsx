import { FC } from 'react';

const SectionGridSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-zinc-800 aspect-square rounded-lg mb-2"></div>
          <div className="h-4 bg-zinc-800 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-zinc-800 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default SectionGridSkeleton;