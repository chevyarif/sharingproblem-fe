import { compareDesc, parseISO } from "date-fns";

export const sortBlogs = (blogs) => {
  if (!Array.isArray(blogs)) {
    console.error("Invalid data: blogs is not an array", blogs);
    return [];
  }
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const mapBlogsToComponentProps = (blogs) => {
  return blogs.map((blog) => ({
    id: blog.id,
    title: blog.nama || "No Title",
    description: blog.pertanyaan || "No Description",
    publishedAt: blog.tgl || "Unknown Date",
    category: blog.kategori || "Uncategorized",
  }));
};

export const cx = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// src/utils/index.js
export const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};