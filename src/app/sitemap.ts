import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `https://sonnysayisolutions.co.ke/journal/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [
    { url: "https://sonnysayisolutions.co.ke", lastModified: new Date() },
    { url: "https://sonnysayisolutions.co.ke/journal", lastModified: new Date() },
    ...posts,
  ];
}