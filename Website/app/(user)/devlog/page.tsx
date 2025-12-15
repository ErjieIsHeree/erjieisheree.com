import { createClient } from '@/lib/supabase/server';
import { Grid, Typography, Link, Divider, Box } from "@mui/material"

async function getTracePosts() {
  const supabase = await createClient();
  const { data: postArray, error } = await supabase
    .from("devlog")
    .select("id, title, subtitle, updated_at, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching postArray:", error);
    return [];
  }

  return postArray || [];
}

type Year = {
  year: number;
}

function renderYear(year: Year, postYear: number) {
  year.year = postYear;
  return (
    <Grid size={12}>
      <Typography variant="h2" color="text.primary">{year.year}</Typography>
      <Divider />
    </Grid>
  );
}

function renderPost(
  post: {
    id: number;
    title: string;
    subtitle: string;
    created_at: number;
    updated_at: number;
  }
) {
  return(
    <Grid size={12} key={post.id}>
      <Link href={`/devlog/${post.id}`} display={"flex"} justifyContent={"space-between"} underline='none'>
        <Typography variant="body1" color="textPrimary" fontWeight={"bold"}>{post.title}</Typography>
        <Typography variant="body1" color="textPrimary" sx={{ px: 30 }}>{new Date(post.created_at).getDate()}/{new Date(post.created_at).getMonth()}/{new Date(post.created_at).getFullYear()}</Typography>
      </Link>
      <Divider />
    </Grid>
  );
}

export default async function Page() {
  const postArray = await getTracePosts();
  const year: Year = { year: 0 };

  return (
    <Grid container spacing={5} sx={{ px: 10, py: 5 }} >
      <Grid size={12}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <Typography variant="h1" color="text.primary">DevLog</Typography>
          </Grid>
          <Grid size={5}>
            <Typography variant="body1" color="text.primary">Welcome to mi studies/works blocs notes.<br />Here you&#39;ll find everything about my background as an IT professional.</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={0}>
          {postArray.map(post => {
            if (year.year !== new Date(post.created_at).getFullYear()) {
              return (
                <Box key={post.id} width={"100%"}>
                  {renderYear(year, new Date(post.created_at).getFullYear())}
                  {renderPost(post)}
                </Box>
              );
            }
            return renderPost(post);
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
