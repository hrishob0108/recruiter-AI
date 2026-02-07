import linkedin from '../assets/logos/linkedin.png'
import indeed from '../assets/logos/indeed.png'
import naukri from '../assets/logos/naukri.png'
import wellfound from '../assets/logos/wellfound.png'
import glassdoor from '../assets/logos/glassdoor.png'
import monster from '../assets/logos/monster.png'
import instahyre from '../assets/logos/instahyre.png'
import cutshort from '../assets/logos/cutshort.png'
import iimjobs from '../assets/logos/iimjobs.png'

export default function Logos() {
  const logos = [
    { name: "LinkedIn", url: linkedin },
    { name: "Indeed", url: indeed },
    { name: "Naukri", url: naukri },
    { name: "Wellfound", url: wellfound },
    { name: "Glassdoor", url: glassdoor },
    { name: "Monster", url: monster },
    { name: "Instahyre", url: instahyre },
    { name: "Cutshort", url: cutshort },
    { name: "IIMJobs", url: iimjobs },
  ]

  // Duplicate list for infinite scroll
  const loopLogos = [...logos, ...logos]

  return (
    <section
      className="
        py-28
        px-6
        bg-gradient-to-r
        from-lightBg
        to-accent1/30
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Post Once, Reach Everywhere
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          RecruiterAI automatically syncs your job postings across all major hiring platforms.
        </p>
      </div>

      <div className="relative mt-16 overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-lightBg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-lightBg to-transparent z-10 pointer-events-none" />

        <div className="logo-track flex gap-12 items-center">
          {loopLogos.map((logo, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                h-16
                w-40
                flex
                justify-center
                items-center
                cursor-pointer
                transition-all
                duration-300
                grayscale
                opacity-60
                hover:grayscale-0
                hover:opacity-100
                hover:scale-110
              "
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-12 max-w-[140px] object-contain mix-blend-multiply"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerText = logo.name;
                  // Styled Fallback
                  e.target.parentElement.className = "text-xl font-serif font-bold text-gray-800 flex justify-center items-center h-full w-full";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
