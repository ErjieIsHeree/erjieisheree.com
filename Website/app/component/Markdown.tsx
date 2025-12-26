import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, Typography, Divider, Grid, Link } from "@mui/material";

type MarkdownProps = {
  content: string;
};

export default function Markdown({ content }: MarkdownProps) {
  return (
    <Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <Typography
              variant="h1"
              color="textPrimary"
              fontWeight={"bold"}
              fontSize={35}
              sx={{ mb: 5 }}
            >
              {children}
            </Typography>
          ),
          h2: ({ children }) => (
            <Grid>
              <Typography
              variant="h2"
              color="textPrimary"
              fontWeight={"bold"}
              fontSize={28}
              sx={{ mt: 10 }}
            >
                {children}
              </Typography>
              <Divider />
              <br />
            </Grid>
          ),
          h3: ({ children }) => (
            <Typography
              variant="h3"
              color="textPrimary"
              fontSize={24}
            >
              {children}
            </Typography>
          ),
          h4: ({ children }) => (
            <Typography
              variant="h4"
              color="textPrimary"
              fontSize={20}
            >
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography
              variant="body1" 
              color="textPrimary"
              fontSize={18}
            >
              {children}
            </Typography>
          ),
          a: ({ children, href }) => (
            <Link
              href={href}
            >
              {children}
            </Link>
          ),
          li: ({ children }) => (
            <Typography
              component={"li"}
              variant="body1"
              color="textPrimary"
              fontSize={18}
            >
              {children}
            </Typography>
          ),
          img: ({ src, alt }) => (
            <Box
              component="img"
              src={src}
              alt={alt}
              sx={{
                width: "auto",
                height: "auto",
                display: "block",
                margin: "24px auto"
              }}
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}
