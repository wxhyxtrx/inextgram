"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export default function ThemeProviders({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
