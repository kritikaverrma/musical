import { FC } from 'react';

const FeaturedSection: FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured content will go here */}
      </div>
    </section>
  );
};

export default FeaturedSection;