import { scale } from "react-native-size-matters";

export const FONT_SIZE = {
  xs: scale(10),
  sm: scale(12),
  md: scale(14),
  base: scale(16),
  lg: scale(18),
  xl: scale(20),
  "2xl": scale(24),
  "3xl": scale(30),
  "4xl": scale(36),
} as const;

export const FONT_WEIGHT = {
  thin: "100",
  extraLight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const;

export const SPACING = {
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(20),
  "2xl": scale(24),
  "3xl": scale(32),
  "4xl": scale(40),
} as const;

export const RADIUS = {
  sm: scale(4),
  md: scale(8),
  lg: scale(12),
  xl: scale(16),
  full: 9999,
} as const;
