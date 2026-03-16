"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ThemeLogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ThemeLogo({ width = 120, height = 40, priority = false }: ThemeLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src = mounted && resolvedTheme === "light"
    ? "/brand/Logo_Original.svg"
    : "/brand/Logo_White.svg";

  return (
    <Image
      src={src}
      alt="AbitHub"
      width={width}
      height={height}
      priority={priority}
    />
  );
}
