# RecruiterAI Landing Page

A high-converting, modern landing page for an AI recruitment SaaS. Built with **React**, **Vite**, and **Tailwind CSS v4**.


## ✨ Features

-   **Premium Design**: Inspired by "Tines" and "Linear" aesthetics, featuring a clean layout, serif typography (*Playfair Display*), and a professional Blue/Purple color palette.
-   **Interactive Flowcharts**: A dynamic "How it Works" section with tabbed switching (Screening, Interview, Re-engagement).
-   **Data Visualization**: Custom bar graphs and infinite loop sliders to showcase metrics and social proof.
-   **Scroll Animations**: Smooth, staggered entrance animations using a custom `Reveal` component (IntersectionObserver) + CSS keyframes.
-   **Floating Widgets**: Interactive testimonial cards in the Hero section that float and reveal on scroll.
-   **Responsive**: Fully optimized for mobile, tablet, and desktop screens.

## � Landing Page Structure

The page follows a high-conversion narrative flow:

1.  **Hero Section**: Captures attention immediately with a value-driven headline, social proof (floating testimonial widgets), and clear dual CTAs.
2.  **Interactive Flowcharts**: Breaks down the complex AI process into 3 simple, digestible steps (Screening, Interview, Re-engagement) using a tabbed interface.
3.  **Metrics & Analysis**: Combines an infinite loop of benefits with a hard-data bar graph to appeal to analytical buyers.
4.  **Social Proof**:
    *   **Logos**: An infinite scrolling marquee of trusted companies (grayscale to color on hover).
    *   **Testimonials**: "Tines-style" cards with specific results and colorful accents to build trust.
5.  **FAQ**: Addressing common objections (ATS integration, security) in a clean accordion format.
6.  **Final CTA**: A strong, gradient-backed footer to catch users at the bottom of the scroll.

## 🎨 Design System ("The Tines Look")

We strictly adhered to a premium aesthetic:
-   **Typography**: *Playfair Display* for sophisticated headings vs. *Inter* for clean, readable UI text.
-   **Palette**: A cool, trustworthy base of White/Gray with vivid accents:
    -   `Primary Blue` (#3B82F6) -> Action & Trust
    -   `Purple` (#9333EA) -> AI & Magic
    -   `Cyan` (#06B6D4) -> Speed & Clarity
-   **Interaction**: Everything feels alive. Buttons glow, cards lift on hover, and content cascades in as you scroll.

## �🛠️ Tech Stack

-   **Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display & Inter)
-   **Icons**: SVGs & PNG assets

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hrishob0108/recruiter-AI.git
    cd recruiterai-landing
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```
src/
├── assets/           # Images and logos
│   └── logos/        # Company logos for the infinite slider
├── components/       # React components
│   ├── utils/        # Utility components (Reveal.jsx)
│   ├── Hero.jsx      # Main hero section with floating cards
│   ├── Metrics.jsx   # Stats slider and bar graph
│   └── ...
├── index.css         # Tailwind directives and custom animations
├── App.jsx           # Main application entry
└── main.jsx          # React DOM root
```

## 🎨 Customization

### Colors
The project uses a semantic color scale defined in `src/index.css`:

-   `--color-primary`: `#3B82F6` (Blue)
-   `--color-accent1`: `#A5D8FF` (Light Blue)
-   `--color-accent2`: `#D0BCFF` (Lavender)
-   `--color-accent3`: `#B197FC` (Purple)

### Animations
Animations are handled by:
1.  **CSS Keyframes** in `index.css` (`fade-in-up`, `logo-scroll`).
2.  **Reveal Component** in `src/components/utils/Reveal.jsx` which triggers classes when elements enter the viewport.

