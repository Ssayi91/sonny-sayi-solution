import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "../../../lib/journal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | Sonny Sayi Solutions`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [post.meta.image],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="pt-28 md:pt-32">
      <article className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            <span className="text-green">{post.meta.tag}</span>
            <time dateTime={post.meta.date}>{post.meta.date}</time>
          </div>

          <h1 className="mt-6 font-serif font-semibold leading-[1.1] text-[clamp(2rem,5vw,3.75rem)]">
            {post.meta.title}
          </h1>

          <figure className="mt-12">
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-green/[0.06] blur-2xl" aria-hidden="true" />
              <img
                src={post.meta.image}
                alt={post.meta.title}
                className="relative w-full max-w-sm border border-ink/20 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              />
            </div>
            <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {post.meta.figure}
            </figcaption>
          </figure>

          <div
            className="journal-body mt-14"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-16 border-t border-ink/10 pt-10">
            <a
              href="https://wa.me/254736194051?text=Hi%20Sonny,%20I%20just%20read%20the%20journal.%20I%20think%20my%20business%20has%20a%20systems%20problem."
              target="_blank"
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm uppercase tracking-widest transition-colors hover:border-green hover:text-green"
            >
              Begin the diagnostic
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </div>

          <Link href="/journal" className="mt-10 inline-block text-sm text-muted transition-colors hover:text-ink">
            ← All field reports
          </Link>
        </div>
      </article>
    </main>
  );
}