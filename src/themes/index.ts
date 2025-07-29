// You can import more as needed

import { ThemeType } from "@/types/theme";
import { defaultTheme } from "./default";
import { darkHero } from "./darkHero";

export const themes: Record<string, ThemeType> = {
  default: defaultTheme,
  darkHero: darkHero,
  // Add more themes here
}