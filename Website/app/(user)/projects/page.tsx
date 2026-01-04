import { Grid, Typography, Card, CardContent, Divider, CardActionArea } from "@mui/material";
import { createClient } from '@lib/supabase/server';

async function getProjects() {
  const supabase = await createClient();
  const { data: projectArray, error } = await supabase
    .from("project")
    .select("id, title, subtitle, link, updated_at, created_at")
    .order("created_at", {ascending: false});
  
    if (error) {
      console.error("Error fetching posts:", error);
      return [] ;
    }

    return projectArray || [];
}

function renderProject(project: {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  updated_at: number;
}) {
  return(
    <Grid size={4} key={project.id}>
      <Card variant="elevation"
        sx={{
          bgcolor: 'background.paper',
          p: 1,
          "&:hover": { filter: 'brightness(0.9)' }
        }}>
        <CardActionArea component={"a"} href={project.link} >
          <CardContent>
            <Typography variant="caption" color="textSecondary">Last update: {new Date(project.updated_at).toLocaleDateString()}</Typography>
            <Typography variant="h3" color="textPrimary" fontSize={30} fontWeight={"bold"}>{project.title}</Typography>
            <Typography variant="subtitle1" color="textPrimary">{project.subtitle}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default async function Page() {
  const projectArray = await getProjects();

  return (
    <Grid container spacing={4}>
      <Grid container spacing={3} size={12}>
        <Grid size={12}>
          <Typography variant="h1" color="text.primary">Projects</Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1" color="text.primary">You found the portfolio page!<br />All the projects here have at least 50% of participation from me.</Typography>
        </Grid>
        <Grid size={12}><Divider /></Grid>
      </Grid>
      <Grid container spacing={5} size={12}>
        {projectArray.map(renderProject)}
      </Grid>
      <Grid size={12}><Divider /></Grid>
    </Grid>
  );
}
