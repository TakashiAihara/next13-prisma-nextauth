"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "./client";

export function Page() {
  const { data: session } = useSession();
  const postQuery = trpc.users.useQuery();

  return !session ? (
    <a
      href="/api/auth/signin"
      className={
        "flex space-x-2 px-2 py-4 font-medium font-normal text-gray-600 dark:text-gray-400"
      }
      onClick={(e) => {
        e.preventDefault();
        signIn();
      }}
    >
      <div>
        <span className="capsize">Sign in with Discord</span>
      </div>
    </a>
  ) : (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/api/auth/signout"
      className={
        "flex space-x-2 px-2 py-4 font-medium font-normal text-gray-600 dark:text-gray-400"
      }
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      <div>
        <span className="capsize">Logged In!! Logout</span>
      </div>
    </a>
  );
}

export default trpc.withTRPC(Page);
