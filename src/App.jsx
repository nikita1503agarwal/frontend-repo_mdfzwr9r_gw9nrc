import Hero from './components/Hero'
import Presentation from './components/Presentation'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12 space-y-8 md:space-y-12">
        <Hero />

        <Presentation />

        <footer className="pt-4 md:pt-6 text-center text-blue-200/70 text-sm">
          Built with a dark, futuristic aesthetic inspired by neuroscience and education.
        </footer>
      </div>
    </div>
  )
}

export default App