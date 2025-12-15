import Image from "next/image";
import { Grid, Typography, Divider, Link } from "@mui/material";

export default function Page() {
  return (
    <Grid container spacing={5} sx={{ px: 10, py: 5 }}>
      <Grid size={12}>
        <Typography variant="h1" color="text.primary">About me</Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography variant="body1" color="textPrimary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacinia dui. Integer scelerisque nibh arcu, eget dictum mauris sodales finibus. Morbi laoreet est ac sapien fermentum bibendum. Proin auctor, risus ut aliquam vehicula, lorem neque luctus turpis, eu convallis elit est vitae dolor. Pellentesque sed semper justo, nec luctus nisl. Ut porta sapien in ex tempor sagittis. Vestibulum iaculis dui dui, eu consequat magna ullamcorper vitae. Duis fermentum cursus odio sed lobortis. Nullam in est est. Sed dignissim libero sed leo efficitur suscipit. Curabitur sollicitudin, lacus sed aliquet sagittis, est augue elementum nibh, vitae eleifend erat velit at sem. Morbi suscipit urna vel sagittis tempor. Donec maximus dignissim facilisis. Suspendisse condimentum, purus eleifend mollis lobortis, tellus dolor ornare arcu, vitae consequat purus dolor nec urna.</Typography>
          </Grid>
          <Grid size={6}>
            <Image src="/img/others/temp-img.jpg" width={300} height={500} alt="A photo of me, Erjie!" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Typography variant="h2" color="textPrimary">Contact</Typography>
        <Divider />
        <br />
        <Typography variant="body1" color="textPrimary">
          Email: <Link component={"a"} href="mailto:erjieisheree@gmail.com">erjieisheree@gmail.com</Link><br />
          LinkedIn: <Link component={"a"} href="https://www.linkedin.com/in/erjie-xia-5b50b72a6/">Erjie Xia</Link><br />
          Github: <Link component={"a"} href="https://github.com/ErjieIsHeree">ErjieIsHeree</Link>
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="h2" color="textPrimary">What I&#39;m doing now?</Typography>
        <Divider />
        <br />
        <Typography variant="body1" color="textPrimary">
          Email: <Link component={"a"} href="mailto:erjieisheree@gmail.com">erjieisheree@gmail.com</Link><br />
          LinkedIn: <Link component={"a"} href="https://www.linkedin.com/in/erjie-xia-5b50b72a6/">Erjie Xia</Link><br />
          Github: <Link component={"a"} href="https://github.com/ErjieIsHeree">ErjieIsHeree</Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
