import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = new URL(context.url).pathname;

  if (
    pathname === "/apple-app-site-association" ||
    pathname === "/.well-known/apple-app-site-association"
  ) {
    const file = await context.locals.runtime.fs.readFile(
      "public/.well-known/apple-app-site-association",
      "utf-8"
    );

    return new Response(file, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return next();
});