import { Cpu, Eye, Network } from "lucide-react"

const innovations = [
  {
    icon: Cpu,
    title: "Neural Processing",
    description:
      "Advanced AI models for real-time scene understanding and intelligent interaction in virtual environments.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Cutting-edge visual recognition systems that bridge the gap between physical and digital realities.",
  },
  {
    icon: Network,
    title: "XR Frameworks",
    description: "Proprietary development frameworks for seamless cross-platform immersive experiences.",
  },
]

export function InnovationSection() {
  return (
    <section id="innovation" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
            Innovation &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Pioneering the next generation of immersive technology through continuous R&D
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {innovations.map((innovation, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <innovation.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-4">{innovation.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{innovation.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
          <div className="relative bg-card/50 backdrop-blur border border-border rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-display)] mb-4">
              Powered by Industry Leaders
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our research is backed by partnerships with Unreal Engine for real-time graphics, Meta Quest for VR
              hardware optimization, and XDegree for neural AI systems.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-3" />
                <div className="text-sm font-medium">Unreal Engine</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-3" />
                <div className="text-sm font-medium">Meta Quest</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl mx-auto mb-3" />
                <div className="text-sm font-medium">xDegree</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
