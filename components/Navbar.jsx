import {
  UserButton,
  SignedOut,
  SignedIn,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white/90 backdrop-blur">
      <h2 className="text-3xl font-extrabold text-[#d6601a] tracking-wider">
        REXO AI
      </h2>

      <div className="flex items-center gap-6 text-base font-semibold">
        <Link
          href="#features"
          className="hover:text-[#b44f15] transition-colors"
        >
          Key Features
        </Link>
        <Link href="#demo" className="hover:text-[#b44f15] transition-colors">
          Demo
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-[#d6601a] text-white rounded-xl font-semibold hover:bg-[#c25315] cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-[#f08a1f] text-white rounded-xl font-semibold hover:bg-[#e07e17] cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
