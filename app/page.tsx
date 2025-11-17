import { Github, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Software Engineer & AI Specialist
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-[0.95] tracking-tight">
              AbdulRahman<br/>Alian
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              Building intelligent systems that combine deep learning, mobile innovation, and full-stack engineering
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button variant="default" size="lg" className="text-lg h-14 px-8" asChild>
                <a href="#contact">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-14 px-6" asChild>
                <a href="https://linkedin.com/in/aalian" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-14 px-6" asChild>
                <a href="https://github.com/ghoui" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-32 bg-accent/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
            <div>
              <h2 className="text-5xl font-bold mb-4 text-balance">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-foreground">
                I'm a Software Engineer pursuing my MSc in Advanced Computer Science in Education at Birmingham City University. 
                With a strong foundation from Aston University, I specialize in building innovative solutions that merge AI/ML with 
                practical applications.
              </p>
              <p className="text-xl leading-relaxed text-foreground">
                Currently working as a Research Assistant, I've developed deep learning systems achieving 94% accuracy. 
                I'm passionate about leveraging cutting-edge technologies to solve real-world problems—from healthcare 
                applications to intelligent vehicle systems.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="text-base px-4 py-2">TypeScript</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Python</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">React Native</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">PyTorch</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Node.js</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Flutter</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">AI/ML</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          
          <div className="space-y-8">
            
            <Card className="p-8 md:p-10 hover:shadow-xl transition-all border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Research Assistant</h3>
                  <p className="text-xl text-muted-foreground">Birmingham City University</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-primary">July 2025 – Present</p>
                  <p className="text-muted-foreground">Birmingham, UK</p>
                </div>
              </div>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Developed a deep learning-based image quality classification system using PyTorch and TensorFlow, achieving <strong className="text-primary">94% accuracy</strong> on validation datasets</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Implemented advanced preprocessing techniques including noise reduction, histogram equalization, and data augmentation to improve model robustness</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Designed and optimized CNN architectures with transfer learning, reducing training time by <strong className="text-primary">40%</strong></span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-8">
                <Badge className="text-sm">PyTorch</Badge>
                <Badge className="text-sm">TensorFlow</Badge>
                <Badge className="text-sm">CNN</Badge>
                <Badge className="text-sm">Transfer Learning</Badge>
              </div>
            </Card>

            <Card className="p-8 md:p-10 hover:shadow-xl transition-all border-l-4 border-l-accent">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Software Engineer</h3>
                  <p className="text-xl text-muted-foreground">Bump Stop Ready, NHS Subdivision</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-primary">Nov 2024 – Feb 2025</p>
                  <p className="text-muted-foreground">Remote</p>
                </div>
              </div>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Developed a Flutter-based mobile application to assist users in improving their pre-pregnancy health with personalized advice based on user input</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Utilized agile methodologies for continuous development and incorporated regular feedback from stakeholders</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Integrated AI APIs and LLM to provide health insights and personalized recommendations</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-8">
                <Badge className="text-sm">Flutter</Badge>
                <Badge className="text-sm">AI APIs</Badge>
                <Badge className="text-sm">LLM</Badge>
                <Badge className="text-sm">Agile</Badge>
              </div>
            </Card>

            <Card className="p-8 md:p-10 hover:shadow-xl transition-all border-l-4 border-l-accent">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Software Engineer</h3>
                  <p className="text-xl text-muted-foreground">AFJ for Vehicle Maintenance</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-primary">Nov 2024 – Present</p>
                  <p className="text-muted-foreground">Remote</p>
                </div>
              </div>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Built a React Native mobile application with Expo and TypeScript for booking vans with efficient route planning algorithms</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Developed dual-version app: driver version with route navigation and customer version for requesting services</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Integrated AI model pipeline for predictive vehicle maintenance and diagnostics</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Implemented mechanical test feature through USB interface for vehicle diagnostics with data storage</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-8">
                <Badge className="text-sm">React Native</Badge>
                <Badge className="text-sm">TypeScript</Badge>
                <Badge className="text-sm">Expo</Badge>
                <Badge className="text-sm">AI Integration</Badge>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-32 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          
          <div className="space-y-8">
            
            <Card className="p-8 md:p-10 hover:shadow-xl transition-all border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Brand Research Agent</h3>
                  <p className="text-xl text-muted-foreground">Autonomous AI Research System</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-primary">Jan 2025 – Present</p>
                </div>
              </div>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Generated <strong className="text-primary">£15k in revenue</strong> with <strong className="text-primary">95% client satisfaction</strong>, reducing brand intelligence compilation time from 4+ hours to 10 minutes</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Enabled advanced web data extraction across <strong className="text-primary">200+ competitor websites</strong> using BrowserBase and Stagehand framework</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Enhanced content accuracy, reducing AI hallucination by <strong className="text-primary">40%</strong> through RAG pipeline with Pinecone vector queries</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Scaled to <strong className="text-primary">50+ brands across 8 industries</strong> with <strong className="text-primary">92% stakeholder approval</strong> through agentic workflow orchestration</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-8">
                <Badge className="text-sm">TypeScript</Badge>
                <Badge className="text-sm">Node.js</Badge>
                <Badge className="text-sm">BrowserBase</Badge>
                <Badge className="text-sm">OpenAI</Badge>
                <Badge className="text-sm">Pinecone</Badge>
                <Badge className="text-sm">Slack API</Badge>
              </div>
            </Card>

            <Card className="p-8 md:p-10 hover:shadow-xl transition-all border-l-4 border-l-accent">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Valyu Claude Agent SDK</h3>
                  <p className="text-xl text-muted-foreground">Open Source Contribution</p>
                </div>
                <div className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/GhouI/valyu-claude-agent-sdk" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Contributed to the development of an SDK for building AI agents powered by Claude</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Implemented core functionality for agent orchestration and tool integration</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1.5 text-2xl">•</span>
                  <span>Collaborated with open source community to enhance SDK capabilities and developer experience</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-8">
                <Badge className="text-sm">TypeScript</Badge>
                <Badge className="text-sm">Claude</Badge>
                <Badge className="text-sm">AI Agents</Badge>
                <Badge className="text-sm">Open Source</Badge>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-32 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Open to discussing new opportunities, collaborations, or interesting projects
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <a href="mailto:abdulalian201@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8" asChild>
              <a href="https://github.com/ghoui" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="h-14 w-14 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
              <a href="https://linkedin.com/in/aalian" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-14 w-14 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
              <a href="https://github.com/ghoui" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-7 w-7" />
              </a>
            </Button>
          </div>

          <div className="mt-20 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © 2025 AbdulRahman Alian
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
