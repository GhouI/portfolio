import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Research Assistant (Part-time)",
    company: "Birmingham City University",
    location: "Birmingham, UK",
    period: "July 2025 - Present",
    description: [
      "Developed a deep learning-based image quality classification system using PyTorch and TensorFlow, achieving 94% accuracy on validation datasets",
      "Implemented advanced preprocessing techniques including noise reduction, histogram equalization, and data augmentation to improve model robustness",
      "Designed and optimized CNN architectures with transfer learning from pre-trained models (ResNet, EfficientNet) reducing training time by 40%",
    ],
    tags: ["PyTorch", "TensorFlow", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Volunteering Software Engineer",
    company: "Bump Stop Ready, NHS Subdivision",
    location: "Remote",
    period: "November 2024 - February 2025",
    description: [
      "Developed a Flutter-based mobile application to assist users in improving their pre-pregnancy health by providing personalized advice",
      "Utilized agile methodologies for continuous development and incorporated regular feedback from stakeholders",
      "Integrated AI APIs to offer additional health insights and used an LLM to provide further recommendations",
    ],
    tags: ["Flutter", "AI APIs", "LLM", "Agile"],
  },
  {
    title: "Volunteering Software Engineer",
    company: "AFJ for Vehicle Maintenance",
    location: "Remote",
    period: "November 2024 - August 2025",
    description: [
      "Built a React Native mobile application with Expo and TypeScript for booking vans, similar to Uber",
      "Developed a dual-version app: one for drivers with route navigation, another for customers to request services",
      "Integrated a pipeline for transmitting vehicle data to an AI model for predictive maintenance",
      "Implemented a mechanical test feature enabling users to run diagnostics through a USB interface",
    ],
    tags: ["React Native", "TypeScript", "Expo", "AI", "Predictive Maintenance"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey in software engineering, AI research, and mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
