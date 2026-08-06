import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { allArticles, getArticle, formatArticleDate } from "@/data/articles";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag, Linkedin } from "lucide-react";

const DEFAULT_TITLE = "Ilmeza Foundation — Building Hope. Creating Futures.";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  // Set the browser tab title + share meta to this article's title.
  useEffect(() => {
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };
    if (article) {
      document.title = `${article.title} | Ilmeza Foundation`;
      setMeta('meta[property="og:title"]', article.title);
      setMeta('meta[name="twitter:title"]', article.title);
      setMeta('meta[property="og:description"]', article.excerpt);
      setMeta('meta[name="description"]', article.excerpt);
      if (article.cover) {
        setMeta('meta[property="og:image"]', article.cover);
        setMeta('meta[name="twitter:image"]', article.cover);
      }
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [article]);

  if (!article) {
    return (
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for may have been moved or removed.</p>
          <Link to="/knowledge-hub">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md h-12 px-6 font-semibold">
              <ArrowLeft size={16} className="mr-2" /> Back to Knowledge Hub
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={article.cover} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-gradient opacity-[0.68]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(226,60%,10%)]/85 via-[hsl(226,60%,12%)]/30 to-[hsl(226,60%,10%)]/55" />
          <div className="absolute inset-0 brand-dots opacity-10" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
          <FadeIn>
            <div className="mb-5">
              <Link to="/knowledge-hub" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors">
                <ArrowLeft size={16} /> Back to Knowledge Hub
              </Link>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <Tag size={12} /> {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-white leading-tight">{article.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
              <span className="inline-flex items-center gap-2"><User size={15} className="text-cyan" /> {article.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={15} className="text-cyan" /> {formatArticleDate(article.date)}</span>
              <span className="inline-flex items-center gap-2"><Clock size={15} className="text-cyan" /> {article.readTime}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeIn>
            <p className="text-lg md:text-xl text-primary/80 font-medium leading-relaxed border-l-4 border-accent pl-5 mb-10">
              {article.excerpt}
            </p>

            <article className="space-y-6">
              {article.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="text-2xl md:text-3xl font-serif font-bold text-primary pt-4">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={i} className="my-8 rounded-2xl bg-[hsl(226,40%,98%)] border-l-4 border-accent p-6 md:p-8">
                      <p className="text-xl md:text-2xl font-serif font-medium italic text-primary leading-relaxed">
                        “{block.text}”
                      </p>
                    </blockquote>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="my-4 space-y-3">
                      {block.items.map((li) => (
                        <li key={li} className="flex items-start gap-3 text-base md:text-lg text-foreground/80 leading-relaxed">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "stats") {
                  return (
                    <div key={i} className="my-8 grid sm:grid-cols-2 gap-4">
                      {block.items.map((s) => (
                        <div key={s.label} className="rounded-2xl bg-navy-gradient text-white p-6 relative overflow-hidden">
                          <div className="absolute inset-0 brand-dots opacity-10" />
                          <p className="relative text-3xl md:text-4xl font-serif font-bold text-cyan leading-none">{s.value}</p>
                          <p className="relative mt-2 text-sm text-white/80 leading-snug">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-base md:text-lg text-foreground/80 leading-[1.8]">
                    {block.text}
                  </p>
                );
              })}
            </article>

            {/* Author byline */}
            <div className="mt-12 pt-8 border-t border-border/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-gradient text-white flex items-center justify-center font-serif font-bold text-xl shrink-0">
                    {article.author.trim().charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">Written by</p>
                    <p className="text-lg font-serif font-bold text-primary leading-tight">{article.author}</p>
                    {article.authorRole && <p className="text-sm text-muted-foreground">{article.authorRole}</p>}
                    {article.authorLinkedin && (
                      <a
                        href={article.authorLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary transition-colors"
                      >
                        <Linkedin size={15} /> Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
                <Link to="/publish">
                  <Button variant="outline" className="rounded-md border-2 border-primary/20 text-primary hover:bg-primary hover:text-white h-11 px-5 font-semibold">
                    <Share2 size={15} className="mr-2" /> Contribute an Article
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-[hsl(226,40%,98%)]">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8">More from the Knowledge Hub</h2>
            <div className="grid md:grid-cols-2 gap-7">
              {related.map((a) => (
                <Link key={a.slug} to={`/knowledge-hub/${a.slug}`} className="group block">
                  <article className="card-lift h-full bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm flex flex-col sm:flex-row">
                    <div className="sm:w-40 h-40 sm:h-auto shrink-0 overflow-hidden">
                      <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5 flex flex-col">
                      <span className="text-xs font-bold text-accent mb-1.5">{a.category}</span>
                      <h3 className="font-serif font-bold text-primary leading-snug group-hover:text-accent transition-colors">{a.title}</h3>
                      <span className="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ArticlePage;
