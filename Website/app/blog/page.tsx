import Link from "next/link";
import { createClient } from '@/lib/supabase/server';

async function getBlogPosts() {
  const supabase = await createClient();
  const { data: postArray, error } = await supabase
    .from("blog")
    .select("id, title, subtitle, updated_at, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching postArray:", error);
    return [];
  }

  return postArray || [];
}

export default async function PersonalBlog() {
  const postArray = await getBlogPosts();

  return (
    <main>
      <div>
        <h1>Blog</h1>
        <p>Here you can find anything I liked to share on its moment. Discover me as much as you can!</p>
      </div>
      <div>
        {postArray.map(post => (
          <Link href="/" key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
            <h4>{new Date(post.updated_at).toLocaleDateString()}</h4>
            <h4>{new Date(post.created_at).toLocaleDateString()}</h4>
          </Link>
        ))}
      </div>
    </main>
  );
}
