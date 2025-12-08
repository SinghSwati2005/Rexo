import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Optional route matcher:
export const config = {
  matcher: [
    // Protect all routes except static files and API routes (change as you need)
    "/((?!.*\\..*|_next).*)",
    "/",
  ],
};
