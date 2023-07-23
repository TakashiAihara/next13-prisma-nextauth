import { PrismaClient } from "@prisma/client";

import { publicProcedure, router } from "./trpc";

const prisma = new PrismaClient();

export const appRouter = router({
  users: publicProcedure.query(async () => prisma.user.findMany()),
});

export type AppRouter = typeof appRouter;
