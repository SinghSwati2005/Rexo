export default function Footer() {
  return (
    <footer className="px-6 lg:px-24 py-12 border-t border-[#f3e8d7] bg-[#f08a1f] text-black">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide">
            REXO AI
          </p>
          <p className="text-sm text-black/80">
            Personalizing fashion journeys across every touchpoint.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-black/80">
          <a href="#features" className="hover:text-black transition-colors">
            Features
          </a>
          <a href="#architecture" className="hover:text-black transition-colors">
            Personalize
          </a>
          <a href="/sign-in" className="hover:text-black transition-colors">
            Login
          </a>
          <a href="/sign-up" className="hover:text-black transition-colors">
            Sign Up
          </a>
        </div>
      </div>
      <div className="mt-8 text-xs text-black/70">
        © 2025 REXO AI — Fashion Intelligence Reinvented.
      </div>
    </footer>
  );
}

