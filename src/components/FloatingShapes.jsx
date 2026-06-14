const FloatingShapes = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-floatSlow" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute top-10 right-1/3 h-40 w-40 rounded-2xl border border-white/10 rotate-45 animate-floatSlow" />
      <div className="absolute bottom-20 left-10 h-24 w-24 rounded-full border border-primary/30 animate-glowPulse" />
    </div>
  )
}

export default FloatingShapes
