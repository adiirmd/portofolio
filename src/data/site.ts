import type { RouteDef } from "@/lib/types";

export const site = {
  url: "https://adiirmd.my.id",
  brand: "adiirmd",
  routes: [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "projects", href: "/projects" },
    { key: "contact", href: "/contact" },
  ] as RouteDef[],
};
