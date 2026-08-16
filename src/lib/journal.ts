import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const dir = path.join(process.cwd(), "src/content/journal");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  figure: string;
  image: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return { slug: file.replace(/\.md$/, ""), ...data } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string) {
  const filePath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return { meta: { slug, ...data } as PostMeta, contentHtml: processed.toString() };
}