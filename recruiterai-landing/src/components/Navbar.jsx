import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/95
        backdrop-blur-xl
        border-b
        border-gray-100
        shadow-sm
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            Recruiter<span className="text-primary">AI</span>
          </div>
        </div>

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            font-medium
            text-gray-600
          "
        >
          <a
            href="#pricing"
            className="hover:text-primary transition-colors duration-200"
          >
            Pricing
          </a>

          <a
            href="#articles"
            className="hover:text-primary transition-colors duration-200"
          >
            Articles
          </a>

          <a
            href="#support"
            className="hover:text-primary transition-colors duration-200"
          >
            Support
          </a>

          <a
            href="#contact"
            className="hover:text-primary transition-colors duration-200"
          >
            Contact Us
          </a>


          <div className="h-6 w-px bg-gray-200 mx-2"></div>

          <a
            href="#login"
            className="hover:text-primary transition-colors duration-200 font-semibold"
          >
            Log In
          </a>

          <button
            className="
              bg-primary
              text-white
              px-6
              py-2.5
              rounded-full
              shadow-lg
              shadow-primary/25
              hover:shadow-xl
              hover:shadow-primary/30
              hover:-translate-y-0.5
              transition-all
              duration-200
              font-semibold
              cursor-pointer
            "
          >
            Try for free
          </button>
        </nav>

        <button
          className="
            md:hidden
            text-2xl
            text-gray-600
            hover:text-primary
            transition-colors
          "
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="
            md:hidden
            bg-white
            border-t
            border-gray-100
            px-6
            py-4
            space-y-4
          "
        >
          <a
            href="#pricing"
            className="block text-gray-700 hover:text-primary transition"
          >
            Pricing
          </a>

          <a
            href="#articles"
            className="block text-gray-700 hover:text-primary transition"
          >
            Articles
          </a>

          <a
            href="#support"
            className="block text-gray-700 hover:text-primary transition"
          >
            Support
          </a>

          <a
            href="#contact"
            className="block text-gray-700 hover:text-primary transition"
          >
            Contact Us
          </a>

          <div className="h-px w-full bg-gray-100 my-2"></div>

          <a
            href="#login"
            className="block text-gray-700 hover:text-primary transition font-semibold"
          >
            Log In
          </a>

          <button
            className="
              w-full
              bg-primary
              text-white
              py-3
              rounded-full
              shadow-lg
              shadow-primary/25
              font-semibold
            "
          >
            Try for free
          </button>
        </div>
      )}
    </header>
  )
}
