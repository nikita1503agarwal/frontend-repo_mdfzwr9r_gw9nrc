function Slide({ title, points, subtitle, flow }) {
  return (
    <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-blue-200/90">{subtitle}</p>
      )}

      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-4 md:mt-6 space-y-2 list-disc list-inside text-blue-100/90">
          {points.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      )}

      {Array.isArray(flow) && flow.length > 0 && (
        <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-2 md:gap-3 text-blue-100/90">
          {flow.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <span className="px-3 py-1 rounded-full bg-slate-700/60 border border-slate-600/50 text-sm">
                {step}
              </span>
              {idx < flow.length - 1 && (
                <span className="mx-2 text-blue-300/70">→</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Slide;