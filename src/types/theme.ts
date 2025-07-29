export type ThemeSpacing = 'relaxed' | 'compact'

export interface ThemeType {
  id: string
  name: string
  font: string
  background: string
  textColor: string
  primaryColor: string
  accentColor: string
  spacing: ThemeSpacing
}