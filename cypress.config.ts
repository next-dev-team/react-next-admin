import { defineConfig } from "cypress";

const PORT = process.env.PORT || "8000";

export default defineConfig({
  e2e: {
    setupNodeEvents(on: any, config: any) {
      console.log("====================================");
      console.log(on, config);
      console.log("====================================");
      // implement node event listeners here
    },
    baseUrl: `http://localhost:${PORT}`,
  },
});
