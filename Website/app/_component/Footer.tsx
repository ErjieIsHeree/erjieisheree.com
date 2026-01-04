import { Typography, Link, Grid, Button } from "@mui/material";
import Image from "next/image";

function renderBrandButton(
  link: string,
  imgSrc: string,
  altText: string,
  label: string,
  title: string
) {
  return (
    <Button component="a" variant="outlined" href={link}
      sx={{
        gap: 1,
        px: 2,
        borderRadius: 0.4
      }}
    >
      <Image src={imgSrc} alt={altText} title={title} width={25} height={25}/>
      <Typography variant="button" fontWeight={"bold"}>{label}</Typography>
    </Button>
  );
}

export default function Footer() {
  return(
    <Grid container size={12} component="footer" spacing={5} justifyContent={"center"}
      sx={{
        backgroundColor: "background.paper",
        pt: 4,
        pb: 2
      }}
    >
      <Grid container spacing={2} size={12} justifyContent={"center"}>
        <Grid size={12}>
          <Typography align={"center"} variant="body2" color="text.primary">Made by Erjie Xia</Typography>
        </Grid>
        {renderBrandButton(
          "https://nextjs.org/",
          "/img/other-logo/next-js.svg",
          "nextjs logo",
          "Next.js",
          "next.js"
        )}
        {renderBrandButton(
          "https://mui.com/",
          "/img/other-logo/new-mui.webp",
          "mui logo",
          "Material UI",
          "material ui"
        )}
        {renderBrandButton(
          "https://www.supabase.com/",
          "/img/other-logo/new-supabase.webp",
          "supabase logo",
          "Supabase",
          "supabase"
        )}
        {renderBrandButton(
          "https://www.typescriptlang.org/",
          "/img/other-logo/new-typescript.webp",
          "typescript logo",
          "TypeScript",
          "typescript"
        )}
        {renderBrandButton(
          "https://react.dev/",
          "/img/other-logo/new-react.webp",
          "react logo",
          "React",
          "react"
        )}
        {renderBrandButton(
          "https://nodejs.org/",
          "/img/other-logo/nodejs.svg",
          "nodejs logo",
          "Node.js",
          "node.js"
        )}
        {renderBrandButton(
          "https://vercel.com/",
          "/img/other-logo/vercel.svg",
          "vercel logo",
          "Vercel",
          "vercel"
        )}
      </Grid>
      <Typography variant="caption" color="text.primary" align={"center"}>
        © 2025 Erjie Xia. Content licensed under <Link component="a" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY-NC-SA 4.0 International</Link>
      </Typography>
    </Grid>
  );
}
