import prisma from "@/db/db";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    // order by createdAt desc
    return await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
  getPostById: publicProcedure.input(z.string()).query(async ({ input }) => {
    return await prisma.post.findUnique({ where: { id: input } });
  }),
});

export type AppRouter = typeof appRouter;
