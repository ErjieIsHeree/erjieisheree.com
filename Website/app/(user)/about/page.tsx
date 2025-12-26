import Image from "next/image";
import { Grid, Typography, Divider, Link } from "@mui/material";

export default function Page() {
  return (
    <Grid container spacing={12}>
      <Grid container size={12} spacing={2}>
        <Typography variant="h1" color="text.primary" fontWeight={"bold"}>About me</Typography>
        <Grid container size={12} spacing={5}>
          <Grid size={6}>
            <Typography variant="body1" color="textPrimary">...</Typography>
          </Grid>
          <Grid size={6} container justifyContent="center" alignItems="center">
            <Image src="/img/me.jpg" width={400} height={500} alt="A photo of me, Erjie!"
              style={{ height: "auto" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Typography variant="h2" color="textPrimary" fontWeight={"bold"} fontSize={38}>Contact info</Typography>
        <Divider />
        <br />
        <Typography variant="body1" color="textPrimary">
          Email: <Link component={"a"} href="mailto:erjieisheree@gmail.com">erjieisheree@gmail.com</Link><br />
          LinkedIn: <Link component={"a"} href="https://www.linkedin.com/in/erjie-xia-5b50b72a6/">Erjie Xia</Link><br />
          Github: <Link component={"a"} href="https://github.com/ErjieIsHeree">ErjieIsHeree</Link>
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="h2" color="textPrimary" fontWeight={"bold"} fontSize={38}>What am I doing now?</Typography>
        <Divider />
        <br />
      </Grid>
    </Grid>
  );
}
