
import { Box } from "@mui/material";

import Markdown from "@ui/Markdown";
import { createClient } from '@/app/_lib/supabase/server';

async function getPost(blogId: string) {
  const supabase = await createClient();
  const { data: post, error } = await supabase
    .from("blog")
    .select("content")
    .eq("id", blogId);

  if (error) {
    console.error("Error fetching postArray:", error);
    return null;
  }

  return post[0];
}

export default async function Page(
  { params }: { params: Promise<{ blogId: string }> }
) {
  const blogId = (await params).blogId;
  const post = await getPost(blogId);

  if (!post) return <Box><h1>Post not found</h1></Box>;

  return (<Markdown content={post.content} />);
}
