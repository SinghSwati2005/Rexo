import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return <div>Please sign in</div>;
  }

  return <div>Welcome, user {userId}</div>;
}
