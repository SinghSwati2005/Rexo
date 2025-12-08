import { UserButton, SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <h2 className="text-2xl font-bold">RetailGenie</h2>

      <div>
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">
              Login
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
