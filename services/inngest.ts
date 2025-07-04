import { Inngest, InngestMiddleware } from "inngest"
import { config } from "~/config"
import { db } from "~/services/db"

const prismaMiddleware = new InngestMiddleware({
  name: "Prisma Middleware",
  init: () => ({
    onFunctionRun: () => ({
      transformInput: () => ({ ctx: { db } }),
    }),
  }),
})

export const inngest = new Inngest({
  id: config.site.slug,
  middleware: [prismaMiddleware],
})
