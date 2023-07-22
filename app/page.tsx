"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthShowcase() {
  const { data: session } = useSession();

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
      <span className="capsize">Sign in with Discord</span>
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
      <span className="capsize">Logout</span>
    </a>
  );
}

export default AuthShowcase;
