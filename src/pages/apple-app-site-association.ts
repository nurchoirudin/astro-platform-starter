export async function GET() {
    return new Response(
        JSON.stringify({
            applinks: {
                apps: [],
                details: [
                    {
                        appID: "8YFZ2N3JSC.com.mandirisekuritas.growin.dev",
                        paths: ["*", "/"],
                    },
                    {
                        appID: "8YFZ2N3JSC.com.mandirisekuritas.growin.qa",
                        paths: ["*", "/"],
                    },
                    {
                        appID: "8YFZ2N3JSC.com.mandirisekuritas.growin.staging",
                        paths: ["*", "/"],
                    },
                    {
                        appID: "8YFZ2N3JSC.com.mandirisekuritas.growin",
                        paths: ["*", "/"],
                    },
                ],
            },
            webcredentials: {
                apps: [
                    "8YFZ2N3JSC.com.mandirisekuritas.growin.dev",
                    "8YFZ2N3JSC.com.mandirisekuritas.growin.qa",
                    "8YFZ2N3JSC.com.mandirisekuritas.growin.staging",
                    "8YFZ2N3JSC.com.mandirisekuritas.growin",
                ],
            },
        }),
        {

            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }
    );
}
