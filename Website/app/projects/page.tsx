import Image from "next/image";
import { Grid, Typography, Link, Box } from "@mui/material";
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

export default async function Projects() {
  const projectArray = await getProjects();

  return (
    <Grid container spacing={5} sx={{ p: 10 }} >
      <Grid size={12}>
        <Grid container spacing={3}>
          <Grid size={12}>  
            <Typography variant="h1" color="text.primary">Projects</Typography>
            <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'pre-line' }}>You found the portfolio page!<br />All the projects here have at least 50% of participation from me.<br /><br />Each project has its own license.</Typography>
          </Grid>
          <Grid>
            <Box component={"ul"}>
              <Box component={"li"} display={"flex"}>
                <Image src="/img/others/green-circle.svg" alt="Green Circle" width={25} height={25} />
                <Link component="a" href="https://creativecommons.org/licenses/by-nc/4.0/">
                  <Typography>Attribution-NonCommercial</Typography>
                </Link>
              </Box>
              <Box component={"li"} display={"flex"}>
                <Image src="/img/others/blue-circle.svg" alt="Blue Circle" width={25} height={25} />
                <Link component="a" href=" https://creativecommons.org/licenses/by-nc-sa/4.0/ ">
                  <Typography>Attribution-NonCommercial-ShareAlike</Typography>
                </Link>
              </Box>
              <Box component={"li"} display={"flex"}>
                <Image src="/img/others/red-circle.svg" alt="Red Circle" width={25} height={25} />
                <Link component="a" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                  <Typography>Attribution-NonCommercial-NoDerivatives</Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        {projectArray.map(project => (
          <Link href="/" key={project.id}>
            <h2>{project.title}</h2>
            <h3>{project.subtitle}</h3>
            <h4>{new Date(project.updated_at).toLocaleDateString()}</h4>
            <h4>{new Date(project.created_at).toLocaleDateString()}</h4>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}
