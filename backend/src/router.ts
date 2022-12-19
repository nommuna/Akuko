import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure.input(z.string()).query(({ input }) => {
    return `Hello World ${input}`;
  })
});

export type AppRouter = typeof appRouter;