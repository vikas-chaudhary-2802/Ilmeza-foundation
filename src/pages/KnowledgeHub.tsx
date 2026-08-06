import { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
  BookOpenText, FlaskConical, FileText, Users2, FolderOpen, ArrowRight,
  Sparkles, Calendar, PenLine,
} from "lucide-react";
import { allArticles, articleCategories, formatArticleDate } from "@/data/articles";

const categories = [
  { icon: BookOpenText, key: "Articles", title: "Articles & Insights", desc: "Expert-written articles on education, health, environment, legal awareness, public policy and community development." },
  { icon: FlaskConical, key: "Research", title: "Research & Publications", desc: "Research papers, policy studies, white papers, and impact assessments addressing pressing social challenges." },
  { icon: FileText, key: "Policy", title: "Policy Briefs", desc: "Concise, research-driven recommendations for policymakers, institutions, NGOs and development professionals." },
  { icon: Users2, key: "Stories", title: "Case Studies & Stories", desc: "Real stories from communities, projects, volunteers and beneficiaries showcasing grassroots impact." },
  { icon: FolderOpen, key: "Reports", title: "Reports & Resources", desc: "Annual reports, project reports, surveys, toolkits and awareness resources produced by Ilmeza." },
];

const KnowledgeHub = () => {
  const [active, setActive] = useState("All");
  const filters = ["All", ...articleCategories];
  const shown = active === "All" ? allArticles : allArticles.filter((a) => a.category === active);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery/health-session.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-gradient opacity-[0.66]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(226,60%,10%)]/85 via-[hsl(226,60%,12%)]/25 to-[hsl(226,60%,10%)]/55" />
          <div className="absolute inset-0 brand-dots opacity-10" />
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-6">
              <Sparkles size={16} /> Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
              Knowledge that Inspires. <span className="text-cyan">Research that Creates Impact.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/75 leading-relaxed">
              A platform dedicated to sharing ideas, research, experiences, and evidence-based solutions
              that contribute to sustainable social development. Because meaningful change begins with
              informed action.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Latest publications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="section-eyebrow mb-4"><Sparkles size={16} /> From the Knowledge Hub</span>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary leading-[1.1]">
                Latest <span className="text-accent">Articles &amp; Insights</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                In-depth perspectives, research and field stories from the people driving our work forward.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    active === f ? "bg-accent text-accent-foreground shadow-md" : "bg-white text-primary/70 border border-border/60 hover:border-accent/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Article grid — two small blocks side by side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {shown.map((a, i) => (
              <FadeIn key={a.slug} delay={i * 0.06}>
                <Link to={`/knowledge-hub/${a.slug}`} className="group block h-full">
                  <article className="card-lift h-full bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">{a.category}</span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="inline-flex items-center gap-1"><Calendar size={12} /> {formatArticleDate(a.date)}</span>
                        <span>•</span>
                        <span>{a.readTime}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-primary leading-snug group-hover:text-accent transition-colors">{a.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                        Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          {shown.length === 0 && (
            <div className="text-center py-16 rounded-3xl border-2 border-dashed border-border/70 bg-[hsl(226,40%,98%)]">
              <p className="text-lg font-semibold text-primary">No articles in this category yet.</p>
              <p className="text-muted-foreground mt-1">New writing is published here regularly — check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-[hsl(226,40%,98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow mb-4 justify-center"><BookOpenText size={16} /> Explore Our Publications</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              A Trusted Resource for <span className="text-accent">Learning & Collaboration</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <FadeIn key={c.key} delay={i * 0.08}>
                <div className="card-lift h-full bg-white rounded-3xl p-7 border border-border/60 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white shadow-lg mb-5">
                    <c.icon size={26} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Publish CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-navy-gradient p-10 md:p-16">
            <div className="absolute inset-0 brand-dots opacity-20" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <FadeIn>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan mb-4">
                  <PenLine size={16} /> Share Your Work
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                  Have Research or a Story Worth Sharing?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed max-w-lg">
                  We welcome original contributions from researchers, academicians, students,
                  healthcare experts, legal practitioners, environmentalists and development professionals.
                </p>
              </FadeIn>
              <FadeIn delay={0.15} className="md:justify-self-end">
                <Link to="/publish">
                  <Button className="bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-full font-bold text-base shadow-lg">
                    Publish With Us <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KnowledgeHub;
