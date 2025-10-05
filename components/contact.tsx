import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Mail, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-muted/30 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always interested in hearing about new opportunities, collaborations, or just having a chat about
            technology and software engineering.
          </p>

          <Card className="p-8 md:p-12 mt-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels:</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <a href="https://www.linkedin.com/in/aalian/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                  <a href="mailto:abdulalian201@gmail.com">
                    <Mail className="h-5 w-5" />
                    Send an Email
                  </a>
                </Button>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="flex justify-center gap-6">
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
            </div>
          </Card>

          <p className="text-sm text-muted-foreground pt-8">
            © 2025 AbdulRahman Alian. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
