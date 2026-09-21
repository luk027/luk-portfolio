import { HomeIcon, LayoutDashboard } from "lucide-react";

export type Theme = "light" | "dark";

export const setDefaultTheme: Theme = "dark";

export const navbarList = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/project", icon: LayoutDashboard, label: "Project" },
];

export const BLUR_FADE_DELAY = 0.04;