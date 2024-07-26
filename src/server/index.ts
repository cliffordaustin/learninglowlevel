import prisma from "@/db/db";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    return await prisma.post.findMany();
  }),
  getPostById: publicProcedure.input(z.string()).query(async ({ input }) => {
    return await prisma.post.findUnique({ where: { id: input } });
  }),
});

export type AppRouter = typeof appRouter;
