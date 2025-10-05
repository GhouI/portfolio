import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "CarPalDamage",
    period: "April 2025 - August 2025",
    description:
      "A mobile application using computer vision with dual PyTorch models for vehicle part identification and damage severity classification. Features FastAPI backend integrated with DVLA database and Redis caching for optimized performance.",
    highlights: [
      "Developed React Native mobile app in Agile team environment",
      "Engineered FastAPI backend with Redis caching, optimizing response times by 60%",
      "Fine-tuned LLM agent using OpenAI API with web-scraping for repair price comparison",
      "Achieved 85% accuracy in cost estimation across multiple sources",
    ],
    tags: ["PyTorch", "FastAPI", "React Native", "PostgreSQL", "Redis", "OpenAI", "Python"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Innovative solutions combining AI, computer vision, and full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary mt-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Languages</h4>
              <p className="text-muted-foreground">Java, Python, C#, JavaScript, TypeScript, HTML/CSS, SQL</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Frameworks & Technologies
              </h4>
              <p className="text-muted-foreground">
                React, React Native, Angular, ASP.NET Core, Node.js, Flask, Spring Boot
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Databases</h4>
              <p className="text-muted-foreground">SQL Server, MongoDB, PostgreSQL, Redis</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Tools & Practices</h4>
              <p className="text-muted-foreground">Git, Visual Studio, Google Cloud Platform, Agile/Scrum, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
