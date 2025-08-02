import { themes } from "@/themes";
import { ReactNode, useEffect } from "react";
import { LAYOUT_ID, THEME_ID } from "./config";
import { layouts } from "@/layouts";

interface IThemeLayout {
  children: ReactNode;
}

function ThemeLayout({ children }: IThemeLayout) {
  const theme = themes[THEME_ID] || themes.default;
  const Layout = layouts[LAYOUT_ID] || layouts.default;
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primaryColor);
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.textColor);
    root.style.setProperty("--accent", theme.accentColor);
    root.style.setProperty("--font-base", theme.font);
  }, [theme]);

  return <Layout theme={theme}>{children}</Layout>;
}

export default ThemeLayout;
