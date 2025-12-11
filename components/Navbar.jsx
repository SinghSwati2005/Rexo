"use client";

import {
  UserButton,
  SignedOut,
  SignedIn,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();
  const userName = user?.firstName || user?.fullName || "User";
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white/90 backdrop-blur">
      <h2 className="text-3xl font-extrabold text-[#d6601a] tracking-wider">
        REXO AI
      </h2>

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
          <div className="flex items-center gap-3">
            <UserButton afterSignOutUrl="/" />
            <span className="text-gray-800 font-semibold">{userName}</span>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
