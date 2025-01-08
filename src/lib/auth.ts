import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"]
  }
}

export async function getSession() {
  return await getServerSession();
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}

// Use this in server components to require authentication
export async function requireAuth() {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect("/");
  }
  
  return user;
}
