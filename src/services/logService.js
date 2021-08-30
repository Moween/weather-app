import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function logger() {
  Sentry.init({
    dsn: "https://e2196d969a104f969cecabc9a658f9ab@o982064.ingest.sentry.io/5936807",
    integrations: [new Integrations.BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}


export default logger;