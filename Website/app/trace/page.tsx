import Link from "next/link";
import { createClient } from '@/lib/supabase/server';

async function getTracePosts() {
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

export default async function WorkTrace() {
  const postArray = await getTracePosts();

  return (
    <main>
      <div>
        <h1>Trace</h1>
        <p>Welcome to mi studies/works blocs notes. Here you&#39;ll find everything about my background as an IT professional.</p>
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
