import { themes } from "@/themes";
import { ReactNode } from "react";
import { LAYOUT_ID, THEME_ID } from "./config";
import { layouts } from "@/layouts";

interface IThemeLayout {
  children: ReactNode;
}

function ThemeLayout ({ children }: IThemeLayout){
  const theme = themes[THEME_ID] || themes.default;
  const Layout = layouts[LAYOUT_ID] || layouts.default;

  const themeVars = {
    "--font-base": theme.font,
    "--color-bg": theme.background,
    "--color-text": theme.textColor,
    "--color-primary": theme.primaryColor,
    "--color-accent": theme.accentColor,
  } as React.CSSProperties;

  return (
    <Layout theme={theme} style={themeVars}>
      {children}
    </Layout>
  );
};

export default ThemeLayout;
