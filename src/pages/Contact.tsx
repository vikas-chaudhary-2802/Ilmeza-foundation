import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", siteConfig.brand.contact.web3formsKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for reaching out! Our team will get back to you within 24-48 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Submission Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Failed to connect to the server. Please check your internet and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-navy opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <p className="text-sm font-sans-body font-bold tracking-[0.2em] uppercase text-accent mb-6">Connect With Us</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground leading-tight tracking-tight">
              Let's Start a <span className="text-gradient-gold italic">Conversation.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <FadeIn direction="right">
                <div className="space-y-8">
                  <h2 className="text-4xl font-serif font-bold text-foreground">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Have questions about our programs or want to support our mission? We're here to help and listen.
                  </p>
                </div>

                <div className="space-y-6 mt-12">
                  <div className="flex gap-6 p-6 glass-card rounded-3xl border-accent/5 transition-transform hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-lg text-muted-foreground font-light">{siteConfig.brand.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 glass-card rounded-3xl border-accent/5 transition-transform hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-lg text-muted-foreground font-light">{siteConfig.brand.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 glass-card rounded-3xl border-accent/5 transition-transform hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Visit Us</p>
                      <p className="text-lg text-muted-foreground font-light">{siteConfig.brand.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-12">
                  <p className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Follow Our Progress</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/ilmezaofficial?igsh=MWV0ZGtkYXBjdzlpag==" className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/ilmeza-foundation/" className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.2}>
                <div className="p-8 md:p-12 glass-card rounded-[2.5rem] shadow-2xl shadow-primary/5">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground uppercase tracking-wider px-1">Full Name</label>
                        <Input name="name" placeholder="John Doe" required className="bg-white/50 border-border/50 h-14 rounded-xl focus:ring-accent" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground uppercase tracking-wider px-1">Email Address</label>
                        <Input name="email" type="email" placeholder="john@example.com" required className="bg-white/50 border-border/50 h-14 rounded-xl focus:ring-accent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground uppercase tracking-wider px-1">Subject</label>
                      <Input name="subject" placeholder="How can we collaborate?" required className="bg-white/50 border-border/50 h-14 rounded-xl focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground uppercase tracking-wider px-1">Message</label>
                      <Textarea name="message" placeholder="Tell us more about your interest..." required className="bg-white/50 border-border/50 min-h-[180px] rounded-xl focus:ring-accent resize-none" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-xl font-bold text-lg shadow-xl shadow-primary/10 transition-all duration-300">
                      {isSubmitting ? "Sending Message..." : "Send Message"} <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Catchphrase */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeIn>
            <div className="p-12 rounded-[3rem] border-2 border-dashed border-accent/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 italic">"Rooted in India. Impacting the World."</h3>
              <p className="text-muted-foreground font-light">
                Our operations are currently based in {siteConfig.brand.contact.address.split(',').slice(-2).join(',')}, but our heart beats for every underserved child and woman across the nation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Contact;
