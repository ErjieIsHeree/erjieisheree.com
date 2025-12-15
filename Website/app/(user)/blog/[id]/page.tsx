import { createClient } from '@/lib/supabase/server';
import { Typography } from '@mui/material';

async function getPost(id: string) {
  const supabase = await createClient();
  const { data: post, error } = await supabase
    .from("blog")
    .select("title")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Error fetching postArray:", error);
    return null;
  }

  return post;
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post)
    return <Typography>Hello</Typography>

  return (
    <>
      <h1>{post.title}</h1>
    </>
  );
}
