"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";

import { store } from "@/redux/store";
import i18next from "@/utils/i18";

import "./globals.css";
import { theme } from "../themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache(),
  });

  return (
    <html lang="en">
      <body className="antialiased">
        <I18nextProvider i18n={i18next}>
          <Provider store={store}>
            <ThemeProvider theme={theme()}>
              <CssBaseline />
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </ThemeProvider>
          </Provider>
        </I18nextProvider>
      </body>
    </html>
  );
}
