import { LayoutType } from '@/types/layout'
import HeroLayout from './HeroLayout'

export const layouts: LayoutType = {
  hero: HeroLayout,
  default: HeroLayout, // fallback
}