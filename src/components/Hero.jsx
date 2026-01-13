'use client'

export default function Hero() {
  return (
    <div className="bg-gray-900 relative isolate px-6 pt-1 lg:px-8 ">
      {/* ---- Gradient background blob (top) ---- */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-4 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
                     sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* ---- Main hero content ---- */}
      <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:py-50
">
        {/* Badge */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Coming Soon — Your AI that attends meetings for you.{' '}
            <a href="#early-access" className="font-semibold text-indigo-400">
              <span aria-hidden="true" className="absolute inset-0" />
              Join the waitlist <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Headline + tagline */}
        <div className="text-center">
          <h1 className="text-6xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
           Never Take Meeting Notes Again
          </h1>
          <p className="mt-7 text-lg font-medium text-pretty text-gray-400 sm:text-xl leading-relaxed">
            <span className="text-indigo-400 font-semibold">MoM.AI</span> joins every call, listens in real time, and writes clean summaries with actions and decisions.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#early-access"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                         hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-white hover:text-indigo-400"
            >
              See How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ---- Gradient background blob (bottom) ---- */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl
                   sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2
                     bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
                     sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

