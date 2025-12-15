import Image from "next/image";
import { Grid, Typography, Link, Card, CardContent, Divider } from "@mui/material";
import { createClient } from '@/lib/supabase/server';

async function getProjects() {
  const supabase = await createClient();
  const { data: projectArray, error } = await supabase
    .from("project")
    .select("id, title, subtitle, link, updated_at, created_at")
    .order("created_at", {ascending: false});
  
    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    return projectArray || [];
}

export default async function Page() {
  const projectArray = await getProjects();

  return (
    <Grid container spacing={5} sx={{ px: 10, py: 5 }} >
      <Grid size={12}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography variant="h1" color="text.primary">Projects</Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="body1" color="text.primary">You found the portfolio page!<br />All the projects here have at least 50% of participation from me.</Typography>
          </Grid>
          <Grid size={12}><Divider /></Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={5}>
          {projectArray.map(project => (
            <Grid size={4} key={project.id}>
              <Card variant="elevation">
                <CardContent>
                  <Link component={"a"} href={project.link} underline="none">
                    <Typography variant="caption" color="textPrimary">Last update: {new Date(project.updated_at).toLocaleDateString()}</Typography>
                    <Typography variant="h2" color="textPrimary">{project.title}</Typography>
                    <Typography variant="subtitle1" color="textPrimary">{project.subtitle}</Typography>
                  </Link>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
