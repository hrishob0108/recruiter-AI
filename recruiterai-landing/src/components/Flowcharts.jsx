import { useState } from 'react'

const FLOWS = {
  screening: {
    id: 'screening',
    title: 'Automated Screening',
    description: 'Screen 250+ applications in minutes vs. 8 hours manually.',
    theme: 'primary', // Blue
    metric: { label: 'Efficiency', value: '8 hrs → Mins', title: 'Screening Time' },
    nodes: [
      { icon: '📄', theme: 'primary', title: 'New Application', sub: 'Submitted' },
      { icon: '🤖', theme: 'accent3', title: 'AI Resume Screen', sub: 'Top 20% Filter' },
      { icon: '⚖️', theme: 'accent2', title: 'Score > 75%?', sub: 'Auto-schedule Interview' }
    ],
    chat: {
      type: 'Candidate Comms',
      messages: [
        { role: 'system', text: 'Resume matched Top 20%. Scheduling interview...' },
        { role: 'action', icon: '📅', title: 'Auto-schedule', sub: 'Sent availability', theme: 'primary' },
        { role: 'action', icon: '🔔', title: 'Reminder Sent', sub: '24 hrs before', theme: 'accent2' }
      ],
      status: '✅ Interview Confirmed'
    }
  },
  interview: {
    id: 'interview',
    title: 'Multi-Stage Interview',
    description: 'Reduce time-to-hire from 42 days to 12 days.',
    theme: 'accent3', // Purple
    metric: { label: 'Velocity', value: '42d → 12d', title: 'Time-to-Hire' },
    nodes: [
      { icon: '🎥', theme: 'accent1', title: 'AI Video Interview', sub: 'Technical Screen' },
      { icon: '📊', theme: 'primary', title: 'AI Scoring', sub: 'Rubric Check' },
      { icon: '🤝', theme: 'accent3', title: 'Score > 80%?', sub: 'Manager Round' }
    ],
    chat: {
      type: 'Hiring Team',
      messages: [
        { role: 'user', text: 'Candidate scored 92/100 on technical interaction.' },
        { role: 'action', icon: '📝', title: 'Offer Letter', sub: 'Generated & Sent', theme: 'accent3' },
        { role: 'action', icon: '📦', title: 'Welcome Kit', sub: 'Triggered', theme: 'accent2' }
      ],
      status: '🎉 Offer Accepted'
    }
  },
  nurture: {
    id: 'nurture',
    title: 'Passive Re-engagement',
    description: 'Build a qualified talent pipeline automatically.',
    theme: 'accent1', // Light Blue
    metric: { label: 'Pipeline', value: '+300%', title: 'Talent Pool' },
    nodes: [
      { icon: '📂', theme: 'accent2', title: 'Future Talent', sub: 'Silver Medalists' },
      { icon: '⏳', theme: 'primary', title: 'Wait 3 Months', sub: 'Patience Period' },
      { icon: '📨', theme: 'accent1', title: 'New Role Open?', sub: 'Auto-Re-engage' }
    ],
    chat: {
      type: 'Nurture Bot',
      messages: [
        { role: 'system', text: 'New "Senior Dev" role matches 12 past candidates.' },
        { role: 'action', icon: '📧', title: 'Re-engagement', sub: 'Email Campaign', theme: 'accent1' },
        { role: 'action', icon: '⚡', title: 'Fast-track', sub: 'Skip Screening', theme: 'accent3' }
      ],
      status: '👀 4 Candidates Interested'
    }
  }
}

// Helper to get tailwind classes for themes
const getThemeClasses = (theme) => {
  switch (theme) {
    case 'primary': return { bg: 'bg-primary/10', border: 'border-primary/20', text: 'text-primary', iconBg: 'bg-primary/20', iconColor: 'text-primary' }
    case 'accent1': return { bg: 'bg-accent1/20', border: 'border-accent1/30', text: 'text-primary', iconBg: 'bg-accent1/30', iconColor: 'text-primary' } // dark text for visibility
    case 'accent2': return { bg: 'bg-accent2/20', border: 'border-accent2/30', text: 'text-accent3', iconBg: 'bg-accent2/30', iconColor: 'text-accent3' }
    case 'accent3': return { bg: 'bg-accent3/10', border: 'border-accent3/20', text: 'text-accent3', iconBg: 'bg-accent3/20', iconColor: 'text-accent3' }
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-600', iconBg: 'bg-gray-100', iconColor: 'text-gray-500' }
  }
}

export default function Flowcharts() {
  const [activeFlow, setActiveFlow] = useState('screening')
  const current = FLOWS[activeFlow]
  const themeStyles = getThemeClasses(current.theme)

  return (
    <section className="relative w-full overflow-hidden bg-[#3B82F6] min-h-[900px] text-white py-20 px-4 md:px-8 font-sans transition-colors duration-500">

      {/* ===== GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-between relative z-10 gap-16 lg:gap-8">

        {/* ===== LEFT CONTENT: TABS & COPY ===== */}
        <div className="lg:w-1/3 flex flex-col space-y-8 pt-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase opacity-70 mb-4">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">✨</span>
              Workflow Builder
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-white mb-4">
              Works Like Your Own <br /> <span className="italic opacity-80">Best Recruiter</span>
            </h2>

            <p className="text-white/80 text-lg max-w-md">
              Build custom hiring workflows in minutes. No coding required.
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-col gap-2">
            {Object.values(FLOWS).map((flow) => (
              <button
                key={flow.id}
                onClick={() => setActiveFlow(flow.id)}
                className={`
                  bg-white/5 backdrop-blur-sm border px-6 py-4 rounded-xl text-left transition-all duration-300 group
                  ${activeFlow === flow.id
                    ? 'border-white bg-white/10 shadow-lg translate-x-2'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/10'}
                `}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold ${activeFlow === flow.id ? 'text-white' : 'text-white/70'}`}>
                    {flow.title}
                  </span>
                  {activeFlow === flow.id && <span className="animate-pulse">●</span>}
                </div>
                {activeFlow === flow.id && (
                  <p className="text-sm text-white/60 animate-fade-in">
                    {flow.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-medium">
              See full library <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* ===== RIGHT CONTENT: UI MOCKUPS (DYNAMIC) ===== */}
        <div className="lg:w-2/3 relative w-full h-[600px] md:h-[700px]">

          {/* 1. METRICS CARD (Back Left) */}
          <div
            key={`metric-${activeFlow}`}
            className="absolute top-32 left-0 md:left-4 w-72 md:w-80 bg-white rounded-xl shadow-2xl p-4 text-gray-800 z-30 transform -rotate-2 origin-bottom-right animate-float-delayed border border-gray-100/50 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-4 text-gray-500 text-xs font-bold uppercase tracking-wider">
              <span className="w-4 h-4">📊</span> Results
            </div>

            <div className={`${themeStyles.bg} ${themeStyles.text} px-3 py-1 rounded-full text-xs font-bold w-fit mb-2`}>
              ⚡ Impact
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{current.metric.title}</h3>

            <div className="bg-gray-50 rounded-lg p-3 w-full text-center">
              <div className="text-xs text-gray-400 font-bold uppercase mb-1">{current.metric.label}</div>
              <div className="text-3xl font-bold text-gray-900">{current.metric.value}</div>
            </div>
          </div>

          {/* 2. STORYBOARD CARD (Center - Main) */}
          <div
            key={`story-${activeFlow}`}
            className="absolute top-0 left-8 md:left-48 right-0 md:right-32 bottom-20 bg-white rounded-xl shadow-2xl overflow-hidden z-20 border border-gray-100/50 flex flex-col transition-all duration-500"
          >
            <div className="bg-white border-b border-gray-100 p-3 flex items-center gap-2 text-primary font-bold text-sm">
              <span className="text-lg">⚡</span> {current.title}
            </div>
            {/* Canvas Pattern */}
            <div className="flex-1 relative bg-gray-50 p-4">
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
              </div>

              {/* Flow Nodes */}
              <div className="flex flex-col items-center space-y-8 relative z-10 animate-fade-in-up">
                {/* SVG Connecting Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: -1 }}>
                  <path d="M 50% 40 L 50% 300" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                </svg>

                {/* Nodes Loop */}
                {current.nodes.map((node, i) => {
                  const styles = getThemeClasses(node.theme)
                  return (
                    <div key={i} className={`bg-white p-2 rounded-lg border ${styles.border} shadow-sm flex items-center gap-3 w-56`}>
                      <div className={`w-8 h-8 rounded ${styles.iconBg} ${styles.iconColor} flex items-center justify-center text-xs`}>
                        {node.icon}
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-gray-700">{node.title}</div>
                        <div className="text-gray-400">{node.sub}</div>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>

          {/* 3. WORKBENCH CARD (Floating Right) */}
          <div
            key={`bench-${activeFlow}`}
            className="absolute top-24 right-0 md:right-10 w-72 md:w-80 bg-white rounded-xl shadow-2xl p-4 text-gray-800 z-30 transform rotate-2 animate-float border border-primary/10 ring-4 ring-white/20 transition-all duration-500"
          >
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-primary">
                <span>💬</span> {current.chat.type}
              </div>
            </div>

            <div className="space-y-3 text-xs animate-fade-in">
              {current.chat.messages[0] && (
                <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg w-full text-gray-600">
                  <span className="font-bold text-gray-800 block mb-1">System:</span>
                  {current.chat.messages[0].text}
                </div>
              )}

              {/* Action Items */}
              {current.chat.messages.slice(1).map((msg, i) => {
                const styles = getThemeClasses(msg.theme)
                return (
                  <div key={i} className={`border ${styles.border} ${styles.bg} p-2 rounded-lg flex items-center gap-3`}>
                    <div className={`w-8 h-8 rounded-full bg-white border ${styles.border} flex items-center justify-center ${styles.iconColor}`}>{msg.icon}</div>
                    <div>
                      <div className="font-bold text-gray-800">{msg.title}</div>
                      <div className="text-gray-400 text-[10px]">{msg.sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 relative">
              <div className="text-[10px] text-gray-400 mb-1">Status</div>
              <div className="w-full bg-green-100 text-green-700 rounded-full py-1 px-3 text-xs font-bold flex items-center gap-2">
                {current.chat.status}
              </div>
            </div>
          </div>

          {/* Decorative Bell */}
          <div className="absolute -top-6 right-20 w-12 h-12 bg-[#FFD6A5] rounded-full border-4 border-white z-40 flex items-center justify-center text-xl shadow-lg animate-bounce">
            ✨
          </div>

        </div>
      </div>
    </section>
  )
}
