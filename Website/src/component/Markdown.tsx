import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, Typography } from "@mui/material";

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
            <Typography variant="h3" color="textPrimary">
              {children}
            </Typography>
          ),
          h2: ({ children }) => (
            <Typography variant="h4" color="textPrimary">
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography variant="body2" color="textPrimary">
              {children}
            </Typography>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}
