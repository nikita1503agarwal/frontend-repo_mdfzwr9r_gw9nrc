import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900">
      <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 flex items-end md:items-center justify-center p-6 md:p-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]">
            AI Study Bot
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-blue-100/90">
            Intelligent Assistant for Learning
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;