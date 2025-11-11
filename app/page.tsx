export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">AbdulRahman Alian</h1>
          
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I'm a developer and software engineer. I build accessible, pixel-perfect digital experiences for the web. 
              Currently pursuing my MSc in Advanced Computer Science while working on innovative projects in AI, 
              mobile development, and full-stack applications.
            </p>
            
            <p>
              My life's work is to make technology easy to understand and interesting to learn about. I'm passionate 
              about creating solutions that matter. I last worked on projects involving AI, computer vision, and 
              full-stack development.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-lg">Some of my favorite projects include:</p>
            <ul className="space-y-1 list-none pl-0">
              <li>
                <a href="#" className="underline hover:no-underline">AI-Powered Computer Vision System</a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">Full-Stack E-Commerce Platform</a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">Mobile Application Development</a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">Real-Time Data Processing</a>
              </li>
            </ul>
          </div>

          <div className="pt-4 text-lg leading-relaxed">
            <p>
              You can{" "}
              <a href="https://github.com/ghoui" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                view my code
              </a>
              {" "}or{" "}
              <a href="https://www.linkedin.com/in/aalian/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                connect with me
              </a>
              . I also work on{" "}
              <a href="#" className="underline hover:no-underline">open source projects</a>
              {" "}and write about technology.{" "}
              <a href="mailto:abdulalian201@gmail.com" className="underline hover:no-underline">
                Reach out
              </a>
              {" "}if interested.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
