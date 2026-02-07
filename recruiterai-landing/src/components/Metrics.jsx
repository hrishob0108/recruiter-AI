import { Reveal } from "./utils/Reveal"

export default function Metrics() {
  const metrics = [
    {
      title: "Faster Screening",
      value: "10×",
      description: "AI parses and ranks 250+ applications per day vs 25 manually.",
      theme: "white"
    },
    {
      title: "Faster Time-to-Hire",
      value: "70%",
      description: "Average hiring timeline drops from 42 days to just 12 days.",
      theme: "accent1"
    },
    {
      title: "More Interview Capacity",
      value: "25×",
      description: "AI conducts 200+ automated screening interviews daily vs 8 manual calls.",
      theme: "accent2"
    },
    {
      title: "Application Completion",
      value: "95%",
      description: "Smart application forms reduce candidate drop-off dramatically.",
      theme: "accent3"
    },
    {
      title: "More Qualified Applications",
      value: "89%",
      description: "AI-optimized job descriptions attract higher-quality candidate pipelines.",
      theme: "white"
    },
    {
      title: "Lower Recruitment Costs",
      value: "80%",
      description: "Reduce spending vs traditional agencies and multiple software tools.",
      theme: "accent1"
    },
    {
      title: "Reduction in Bad Hires",
      value: "50%",
      description: "AI skill assessment and matching improves hiring accuracy.",
      theme: "accent2"
    }
  ]

  const loopMetrics = [...metrics, ...metrics]

  const getTheme = (theme) => {
    switch (theme) {
      case 'accent1': return 'bg-[#A5D8FF] text-blue-900'
      case 'accent2': return 'bg-[#D0BCFF] text-purple-900'
      case 'accent3': return 'bg-[#B197FC] text-white'
      default: return 'bg-white text-gray-900'
    }
  }

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10 mb-16 px-4">
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
              The RecruiterAI Advantage
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light">
              Measurable impact across speed, quality, and hiring costs.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="relative w-full overflow-hidden mb-24">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-[logo-scroll_60s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {loopMetrics.map((metric, i) => (
              <div
                key={i}
                className={`
                  flex-shrink-0 w-[400px] mx-4 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                  flex flex-col justify-between min-h-[300px] border border-gray-100/50
                  ${getTheme(metric.theme)}
                `}
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
                    {metric.title}
                  </div>
                  <p className="text-lg leading-relaxed font-medium opacity-90">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-8 self-end">
                  <span className="text-6xl md:text-7xl font-serif font-bold tracking-tighter block leading-none">
                    {metric.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto px-4">
        <Reveal delay={400}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Impact by the Numbers</h3>
            <p className="text-gray-500">Relative improvement across key hiring KPIs</p>
          </div>

          <div className="flex justify-center gap-4 md:gap-12 h-64 md:h-80 w-full">
            <div className="flex flex-col items-center gap-3 group w-24 h-full">
              <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">70%</div>
              <div className="flex-1 w-full bg-gray-100 rounded-t-xl relative overflow-hidden flex flex-col justify-end">
                <div className="w-full" style={{ height: '70%', backgroundColor: '#3B82F6' }}></div>
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center h-8">Faster<br />Time-to-Hire</div>
            </div>

            <div className="flex flex-col items-center gap-3 group w-24 h-full">
              <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform">95%</div>
              <div className="flex-1 w-full bg-gray-100 rounded-t-xl relative overflow-hidden flex flex-col justify-end">
                <div className="w-full" style={{ height: '95%', backgroundColor: '#9333EA' }}></div>
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center h-8">App<br />Completion</div>
            </div>

            <div className="flex flex-col items-center gap-3 group w-24 h-full">
              <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">89%</div>
              <div className="flex-1 w-full bg-gray-100 rounded-t-xl relative overflow-hidden flex flex-col justify-end">
                <div className="w-full" style={{ height: '89%', backgroundColor: '#2563EB' }}></div>
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center h-8">Qualified<br />Apps</div>
            </div>

            <div className="flex flex-col items-center gap-3 group w-24 h-full">
              <div className="text-3xl font-bold text-cyan-600 group-hover:scale-110 transition-transform">80%</div>
              <div className="flex-1 w-full bg-gray-100 rounded-t-xl relative overflow-hidden flex flex-col justify-end">
                <div className="w-full" style={{ height: '80%', backgroundColor: '#06B6D4' }}></div>
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center h-8">Lower<br />Costs</div>
            </div>

            <div className="flex flex-col items-center gap-3 group w-24 h-full">
              <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform">50%</div>
              <div className="flex-1 w-full bg-gray-100 rounded-t-xl relative overflow-hidden flex flex-col justify-end">
                <div className="w-full" style={{ height: '50%', backgroundColor: '#C084FC' }}></div>
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center h-8">Fewer<br />Bad Hires</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
