import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Define which routes are public
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

// Force Node.js runtime (not Edge)
export const runtime = "nodejs";

// Matcher config for Next.js App Router
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
