import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Virtual Training Simulator",
    category: "Enterprise VR",
    description: "Immersive training platform for industrial safety protocols built with Unreal Engine 5.",
    image: "/futuristic-vr-training-simulation-industrial.jpg",
    tags: ["Unreal Engine", "Meta Quest", "Enterprise"],
  },
  {
    title: "AR Retail Experience",
    category: "Augmented Reality",
    description: "Interactive product visualization system for luxury retail brands.",
    image: "/augmented-reality-retail-shopping-holographic.jpg",
    tags: ["AR", "Computer Vision", "Retail"],
  },
  {
    title: "Neural Vision AI",
    category: "Artificial Intelligence",
    description: "Advanced computer vision system powered by XDegree neural networks.",
    image: "/ai-neural-network-visualization-futuristic.jpg",
    tags: ["XDegree", "AI", "Computer Vision"],
  },
  {
    title: "Metaverse Platform",
    category: "XR Integration",
    description: "Multi-platform immersive social experience with cross-device synchronization.",
    image: "/metaverse-virtual-world-futuristic-city.jpg",
    tags: ["VR", "AR", "WebXR"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Showcasing our latest immersive experiences and intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all bg-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  <span className="text-primary group-hover/btn:text-accent transition-colors">View Project</span>
                  <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
