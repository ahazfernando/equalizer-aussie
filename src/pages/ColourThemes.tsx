import { Layout } from "@/components/layout/Layout";

export default function ColourThemes() {
  const themes = [
    { name: "Arctic White", color: "#FFFFFF", accent: "#2D3748" },
    { name: "Graphite Grey", color: "#4A5568", accent: "#FFFFFF" },
    { name: "Midnight Black", color: "#1A202C", accent: "#E2E8F0" },
    { name: "Champagne Gold", color: "#D4AF37", accent: "#1A202C" },
    { name: "Forest Green", color: "#2F5233", accent: "#FFFFFF" },
    { name: "Ocean Blue", color: "#2B6CB0", accent: "#FFFFFF" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Personalisation
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
              Colour Themes
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Express your style with our range of premium exterior and interior colour options. Each theme is carefully curated to complement the Australian landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <div key={theme.name} className="card-premium overflow-hidden">
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: theme.color }}
                >
                  <span 
                    className="font-heading text-xl font-bold"
                    style={{ color: theme.accent }}
                  >
                    {theme.name}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {theme.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Available on all Equalizer RV models
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Custom colours available on request. Contact us to discuss your requirements.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
