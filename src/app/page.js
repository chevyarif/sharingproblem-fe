import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import { mapBlogsToComponentProps } from "../utils";

export default async function Home() {
  try {
    // Memanggil API route untuk mendapatkan data blog
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const responseData = await res.json();
    const rawBlogs = Array.isArray(responseData) ? responseData : responseData.data || [];
    const blogs = mapBlogsToComponentProps(rawBlogs);

    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <HomeCoverSection blogs={blogs} />
        <FeaturedPosts blogs={blogs} />
        <RecentPosts blogs={blogs} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <p className="text-red-500">Failed to load blog posts.</p>
      </main>
    );
  }
}