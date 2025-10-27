import { serve } from "bun";
import index from "./index.html";
import { LoginSimple } from "./pages/login";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production",
  port: 3005
});

console.log(`🚀 Server running at ${server.url}`);
