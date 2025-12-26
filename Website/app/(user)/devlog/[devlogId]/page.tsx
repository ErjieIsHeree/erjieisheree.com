import { Box } from "@mui/material";

import { createClient } from '@lib/supabase/server';
import Markdown from "@ui/Markdown";

async function getPost(devlogId: string) {
  const supabase = await createClient();
  const { data: post, error } = await supabase
    .from("devlog")
    .select("content")
    .eq("id", devlogId);

  if (error) {
    console.error("Error fetching postArray:", error);
    return null;
  }

  return post[0];
}

export default async function Page({ params, }: {
  params: Promise<{ devlogId: string }>
}) {
  const devlogId = (await params).devlogId;
  const post = await getPost(devlogId);

  if (!post) return <Box><h1>Post not found</h1></Box>;

  return (<Markdown content={post.content} />);
}
