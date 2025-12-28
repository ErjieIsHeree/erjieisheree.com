"use client";

import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { AppTheme } from "@/app/src/theme/themes";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={AppTheme}>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
