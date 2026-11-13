import { useEffect, useState } from "react";

export const THEMES = [
  { id: "musgo", label: "Musgo", swatch: ["#4f5d2f", "#f2c230", "#252c15"] },
  { id: "original", label: "Original", swatch: ["#b3322a", "#ffc93c", "#5e1713"] },
  { id: "oceano", label: "Oceano", swatch: ["#1e4fa3", "#5ee0d6", "#0c1f45"] },
  { id: "meia-noite", label: "Meia-noite", swatch: ["#2b3a8f", "#ffb547", "#11163d"] },
  { id: "crepusculo", label: "Crepúsculo", swatch: ["#7e22ce", "#ff9a4d", "#fb7185"] },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "raguto-theme";
const DEFAULT_THEME: ThemeId = "musgo";

function readStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (THEMES.some((theme) => theme.id === stored)) return stored as ThemeId;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  return DEFAULT_THEME;
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === DEFAULT_THEME) root.removeAttribute("data-theme");
    else root.dataset.theme = theme;

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEMES.find((t) => t.id === theme)!.swatch[0]);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore — the theme just won't persist.
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
