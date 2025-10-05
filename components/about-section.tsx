import { Sparkles, Zap, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PixelVR</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            We are a cutting-edge technology company at the intersection of innovation, research, and creative
            engineering. Our mission is to push the boundaries of what's possible in immersive technology and artificial
            intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pioneer next-generation immersive experiences that blend creativity with cutting-edge technology.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">Research Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our R&D team continuously explores new frontiers in VR, AR, and AI to deliver breakthrough solutions.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">Premium Partners</h3>
              <p className="text-muted-foreground leading-relaxed">
                Officially affiliated with Unreal Engine, Meta Quest, and XDegree for world-class development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
