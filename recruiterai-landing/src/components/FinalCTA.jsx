import { Reveal } from "./utils/Reveal"

export default function FinalCTA() {
  return (
    <section className="bg-gray-900 overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#1e1b4b] to-black opacity-90" />

      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-16 text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Ready to Hire Better, <br />
            <span className="italic text-primary-light">Faster?</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
            Join 500+ companies hiring smarter with AI
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <button className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">
              Start Free Trial
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm transition-all">
              Schedule Demo
            </button>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={400}>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div>
              &copy; 2024 RecruiterAI. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
