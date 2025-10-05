import { Glasses, Smartphone, Brain, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Glasses,
    title: "VR Experiences",
    description: "Enterprise, Gaming, Simulation, and Education",
    features: ["Immersive Training", "Virtual Showrooms", "Gaming Worlds", "Educational Simulations"],
    gradient: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "AR Applications",
    description: "Retail, Industry, and Smart Interaction Systems",
    features: ["Product Visualization", "Industrial Maintenance", "Interactive Marketing", "Smart Navigation"],
    gradient: "from-secondary to-primary",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Neural models, computer vision, and intelligent automation",
    features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics", "Intelligent Automation"],
    gradient: "from-accent to-secondary",
  },
  {
    icon: Layers,
    title: "XR Integration",
    description: "Blending real and virtual for multi-platform experiences",
    features: ["Cross-Platform Development", "Hybrid Experiences", "WebXR Solutions", "Multi-Device Sync"],
    gradient: "from-primary via-secondary to-accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Comprehensive solutions across the immersive technology spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all bg-card/50 backdrop-blur"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
