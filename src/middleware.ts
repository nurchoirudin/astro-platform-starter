// src/middleware.ts
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url } = context;
  const pathname = new URL(url).pathname;

  // Handle apple-app-site-association untuk root & .well-known
  if (
    pathname === "/apple-app-site-association" ||
    pathname === "/.well-known/apple-app-site-association"
  ) {
    const body = {
      applinks: {
        apps: [],
        details: [
          {
            "appID": "8YFZ2N3JSC.com.mandirisekuritas.growin.dev",
            "paths": [
              "*",
              "/"
            ]
          },
          {
            "appID": "8YFZ2N3JSC.com.mandirisekuritas.growin.qa",
            "paths": [
              "*",
              "/"
            ]
          },
          {
            "appID": "8YFZ2N3JSC.com.mandirisekuritas.growin.staging",
            "paths": [
              "*",
              "/"
            ]
          },
          {
            "appID": "8YFZ2N3JSC.com.mandirisekuritas.growin",
            "paths": [
              "*",
              "/"
            ]
          }
        ]
      },
      webcredentials: {
        apps: [
          "8YFZ2N3JSC.com.mandirisekuritas.growin.dev",
          "8YFZ2N3JSC.com.mandirisekuritas.growin.qa",
          "8YFZ2N3JSC.com.mandirisekuritas.growin.staging",
          "8YFZ2N3JSC.com.mandirisekuritas.growin"
        ]
      }
    };

    return new Response(JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Default: lanjut ke handler berikutnya
  return next();
});