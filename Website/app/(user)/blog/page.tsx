  import { createClient } from '@/app/lib/supabase/server';
import { Grid, Typography, Link, Divider } from "@mui/material";

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

type Year = {
  year: number;
}

function renderYear(year: Year, postYear: number) {
  year.year = postYear;
  return (
    <Grid size={12} sx={{ pt: 3 }}>
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
    <Link key={post.id} href={`/blog/${post.id}`} justifyContent={"space-between"} underline='none'
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        px: 2, py: 0.5,
        borderRadius: 2,
        '&:hover': { filter: 'brightness(0.8)' }
      }}
    >
      <Grid container size={12} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant="h3" color="textPrimary" fontWeight={"bold"} fontSize={20}>{post.title}</Typography>
        <Typography variant="subtitle2" color="textPrimary">{post.subtitle}</Typography>
        <Typography variant="caption" color="textPrimary">{new Date(post.created_at).getDate()}/{new Date(post.created_at).getMonth()}</Typography>
      </Grid>
    </Link>
  );
}

export default async function Page() {
  const postArray = await getBlogPosts();
  const year: Year = { year: 0 };

  return (
    <Grid container spacing={4}>
      <Grid container spacing={3} size={12}>
        <Grid size={12}>
          <Typography variant="h1" color="text.primary">My Blog</Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="subtitle1" color="text.primary">Hi hi! Here I&#39;ll upload all kind of contents of my daily life.<br />Right now my two main hobbies are skiing and singing. We will see our progress through the years and the posts.</Typography>
        </Grid>
      </Grid>
      <Grid container size={12} spacing={2}>
        {postArray.map(post => {
          if (year.year !== new Date(post.created_at).getFullYear()) {
            return (
              <Grid container key={post.id} size={12}>
                {renderYear(year, new Date(post.created_at).getFullYear())}
                {renderPost(post)}
              </Grid>
            );
          }
          return (renderPost(post));
        })}
      </Grid>
    </Grid>
  );
}
