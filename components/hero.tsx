import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">AbdulRahman Alian</h1>
            <p className="text-xl text-muted-foreground">Software Engineer</p>
            <p className="text-lg text-muted-foreground">Birmingham / London / Manchester</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web. Currently pursuing my MSc in Advanced
            Computer Science while working on innovative projects in AI, mobile development, and full-stack
            applications.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/ghoui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aalian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:abdulalian201@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Education</h3>
            <p className="text-foreground font-medium">MSc Advanced Computer Science</p>
            <p className="text-sm text-muted-foreground">Birmingham City University</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Location</h3>
            <p className="text-foreground font-medium">Birmingham / London / Manchester</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Status</h3>
            <p className="text-foreground font-medium">Open to Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
