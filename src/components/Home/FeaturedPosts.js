import React from "react";
import BlogLayoutThree from "../BlogLayoutThree";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = Array.isArray(blogs) ? blogs.slice(0, 3) : [];

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-8">
        Jawaban Terbaru
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedBlogs.length > 0 ? (
          sortedBlogs.map((blog, index) => (
            <article key={index} className="col-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No featured posts available.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;