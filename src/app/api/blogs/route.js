export async function GET() {
    const endpointUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
    try {
      const res = await fetch(`${endpointUrl}/pertanyaan?page=1&limit=20`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      const blogs = await res.json();
      return Response.json(blogs);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
  }