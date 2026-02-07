import { Reveal } from "./utils/Reveal"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl px-4 mt-10 mx-auto">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-serif text-primary-dark mb-6 leading-tight">
            Every Hire <span className="italic font-serif text-primary">Faster</span> <br />
            and <br />
            Better
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-primary/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Save more, hire with confidence and move faster with AI-powered tools that streamline every step of the hiring process – from sourcing to onboarding.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start for free
            </button>
            <button className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all">
              Book a demo
            </button>
          </div>
        </Reveal>
      </div>

      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[2%] z-20">
          <Reveal delay={600} className="float w-72">
            <div className="card bg-white p-5 shadow-xl border border-primary/10 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 text-4xl text-primary/20 font-serif">“</div>
              <p className="text-gray-600 text-sm mb-4 relative z-10 leading-relaxed">
                Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  SK
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Sarah K.</div>
                  <div className="text-xs text-gray-500">Founder at TechStart</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute top-[18%] right-[2%] z-20">
          <Reveal delay={800} className="float-delayed w-72">
            <div className="card bg-white p-5 shadow-xl border border-primary/10 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 text-4xl text-accent3/20 font-serif">“</div>
              <p className="text-gray-600 text-sm mb-4 relative z-10 leading-relaxed">
                Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent3/10 flex items-center justify-center text-accent3 font-bold text-sm">
                  RM
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Rahul M.</div>
                  <div className="text-xs text-gray-500">Hiring Mgr at GrowthCo</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-[12%] left-[2%] z-20">
          <Reveal delay={1000} className="float-delayed w-72">
            <div className="card bg-white p-5 shadow-xl border border-primary/10 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 text-4xl text-accent2/20 font-serif">“</div>
              <p className="text-gray-600 text-sm mb-4 relative z-10 leading-relaxed">
                I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent2/10 flex items-center justify-center text-accent2 font-bold text-sm">
                  PS
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Priya S.</div>
                  <div className="text-xs text-gray-500">CEO at InnovateLabs</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-[18%] right-[2%] z-20">
          <Reveal delay={1200} className="float w-72">
            <div className="card bg-white p-5 shadow-xl border border-primary/10 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 text-4xl text-primary/20 font-serif">“</div>
              <p className="text-gray-600 text-sm mb-4 relative z-10 leading-relaxed">
                Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  AT
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Amit T.</div>
                  <div className="text-xs text-gray-500">Head of HR at ScaleUp</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
