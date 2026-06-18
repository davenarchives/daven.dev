"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

function FaviconUpdater() {
  const { theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    if (!currentTheme) return;
    
    const faviconSrc = currentTheme === "dark" ? "/assets/theme/darkmode.png" : "/assets/theme/lightmode.png";
    
    const img = new window.Image();
    img.onload = () => {
      // Limit the favicon to a standard 64x64 resolution to prevent massive base64 strings
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      // Draw circular clip
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      
      // Draw image scaled down
      // To prevent squishing, use cover logic if image is not square
      const minDimension = Math.min(img.width, img.height);
      const startX = (img.width - minDimension) / 2;
      const startY = (img.height - minDimension) / 2;
      
      ctx.drawImage(img, startX, startY, minDimension, minDimension, 0, 0, size, size);
      
      const dataUrl = canvas.toDataURL("image/png");
      
      // Remove all existing icon links
      const existingLinks = document.querySelectorAll("link[rel~='icon']");
      existingLinks.forEach(link => link.remove());
      
      // Inject the new theme-based favicon
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = dataUrl;
      document.head.appendChild(newLink);
    };
    img.src = faviconSrc;
  }, [theme, resolvedTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <FaviconUpdater />
      {children}
    </NextThemesProvider>
  );
}
