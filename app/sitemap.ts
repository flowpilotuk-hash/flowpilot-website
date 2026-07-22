import type { MetadataRoute } from "next";
import { brand } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/packages", "/how-we-work", "/about", "/contact", "/privacy"];
  return routes.map((route) => ({
    url: `${brand.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/privacy" ? 0.3 : 0.8,
  }));
}
