import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "The Future of Spatial Computing",
    excerpt: "Exploring how VR and AR are converging to create seamless mixed reality experiences.",
    date: "2025-01-15",
    category: "XR Technology",
    image: "/spatial-computing-vr-ar-futuristic.jpg",
  },
  {
    title: "Neural Networks in Real-Time Rendering",
    excerpt: "How AI is revolutionizing graphics processing in Unreal Engine applications.",
    date: "2025-01-10",
    category: "AI & Graphics",
    image: "/neural-network-graphics-rendering-ai.jpg",
  },
  {
    title: "Building for Meta Quest 3",
    excerpt: "Best practices and optimization techniques for next-gen VR development.",
    date: "2025-01-05",
    category: "VR Development",
    image: "/vr-headset-development-meta-quest.jpg",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
            Insights &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Latest thoughts on AI, XR, and immersive technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all bg-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  <span className="text-primary group-hover/btn:text-accent transition-colors">Read More</span>
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            View All Insights
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
