import { useState } from "react"

const faqs = [
  {
    question: "How does AI screening work?",
    answer:
      "RecruiterAI analyzes resumes using skills, experience, and role-specific criteria. Candidates are ranked automatically so you only review the most relevant profiles.",
  },
  {
    question: "Does RecruiterAI integrate with our existing ATS?",
    answer:
      "Yes. RecruiterAI integrates with most popular ATS platforms (Greenhouse, Lever, Workday) and can also be used as a standalone recruiting system.",
  },
  {
    question: "What does the pricing look like?",
    answer:
      "Pricing is based on hiring volume. We offer a free trial so you can evaluate RecruiterAI before choosing a plan. Contact sales for a custom quote.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams are fully set up in under 30 minutes. No technical or engineering effort is required. We provide white-glove onboarding for enterprise teams.",
  },
  {
    question: "Is candidate data secure?",
    answer:
      "Yes. All candidate data is encrypted in transit and at rest, following industry-standard security practices (SOC2 Type II compliant).",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-500 font-light">
            Everything you need to know about the platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`
                  bg-white rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden
                  ${isOpen ? "border-primary shadow-lg ring-1 ring-primary/20" : "border-gray-200 hover:border-gray-300"}
                `}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className={`text-lg font-medium pr-8 ${isOpen ? "text-primary" : "text-gray-900"}`}>
                    {faq.question}
                  </h3>
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300
                      ${isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}
                    `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
