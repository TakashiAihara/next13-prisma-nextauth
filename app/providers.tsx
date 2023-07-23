"use client";

import { useState } from "react";
import { trpc } from "@/app/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

export function Provider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{props.children}</SessionProvider>;
    </QueryClientProvider>
  );
}
export default trpc.withTRPC(Provider);
