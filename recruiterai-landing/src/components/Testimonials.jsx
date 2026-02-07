import { Reveal } from "./utils/Reveal"

const testimonials = [
  {
    quote:
      "We went from taking almost 6 weeks to hire a developer to just 10 days. RecruiterAI handled screening and scheduling end to end.",
    name: "Rahul Mehta",
    role: "Founder",
    company: "TechStart Solutions",
    accent: "border-t-[#3B82F6]",
  },
  {
    quote:
      "As a hiring manager, I finally stopped drowning in resumes. The AI shortlists were accurate and saved us countless hours.",
    name: "Priya Sharma",
    role: "Head of HR",
    company: "ScaleUp Labs",
    accent: "border-t-[#9333EA]",
  },
  {
    quote:
      "RecruiterAI feels like having an extra HR team member who works 24/7. For a small team, this changed everything.",
    name: "Amit Verma",
    role: "CEO",
    company: "InnovateWorks",
    accent: "border-t-[#06B6D4]",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
              Trusted by modern hiring teams
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Join thousands of founders and recruiting leaders who hire faster with AI.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Reveal key={index} delay={index * 200} className="h-full">
              <div
                className={`
                  bg-white p-8 rounded-2xl shadow-xl border border-gray-100
                  hover:-translate-y-2 transition-transform duration-300
                  flex flex-col justify-between h-full
                  ${t.accent} border-t-4
                `}
              >
                <div>
                  <div className="text-6xl font-serif text-gray-100 leading-none mb-4 -ml-2">
                    “
                  </div>
                  <p className="text-lg text-gray-700 font-serif leading-relaxed mb-8 relative z-10">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm">
                    {t.name.charAt(0)}{t.name.split(' ')[1].charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
