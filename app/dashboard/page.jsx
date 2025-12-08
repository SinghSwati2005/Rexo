import { auth, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) return <p>You must be logged in to view this.</p>;
<UserButton/>
  return <h1>Welcome to your dashboard</h1>;
}
