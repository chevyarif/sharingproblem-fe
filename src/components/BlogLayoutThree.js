import Link from "next/link";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-grey dark:text-grey mb-2">
          {blog.title || "Untitled Post"}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {blog.description || "No description available."}
        </p>
        <Link
          href={`/pertanyaan/${blog.id}`}
          className="inline-block mt-4 text-accent dark:text-accentDark font-medium underline underline-offset-2"
        >
          Selengkapnya...
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutThree;