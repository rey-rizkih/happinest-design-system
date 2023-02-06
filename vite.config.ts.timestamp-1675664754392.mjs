// vite.config.ts
import react from "file:///Users/haphap/Learning/happynest-design/happinest-design/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "path";
import { defineConfig } from "file:///Users/haphap/Learning/happynest-design/happinest-design/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/haphap/Learning/happynest-design/happinest-design/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.2.0",
  "react-dom": "^18.2.0"
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/haphap/Learning/happynest-design/happinest-design";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"]
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/components/index.ts"),
      name: "happinest-design",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    },
    target: "esnext",
    sourcemap: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2hhcGhhcC9MZWFybmluZy9oYXBweW5lc3QtZGVzaWduL2hhcHBpbmVzdC1kZXNpZ25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9oYXBoYXAvTGVhcm5pbmcvaGFwcHluZXN0LWRlc2lnbi9oYXBwaW5lc3QtZGVzaWduL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oYXBoYXAvTGVhcm5pbmcvaGFwcHluZXN0LWRlc2lnbi9oYXBwaW5lc3QtZGVzaWduL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCAqIGFzIHBhY2thZ2VKc29uIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFtcInNyY1wiXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJoYXBwaW5lc3QtZGVzaWduXCIsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBhY2thZ2VKc29uLnBlZXJEZXBlbmRlbmNpZXMpXSxcbiAgICB9LFxuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJ7XG4gIFwibmFtZVwiOiBcImhhcHBpbmVzdC1kZXNpZ25cIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcIm1haW5cIjogXCJkaXN0L2luZGV4LnVtZC5qc1wiLFxuICBcIm1vZHVsZVwiOiBcImRpc3QvaW5kZXguZXMuanNcIixcbiAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5lcy5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2luZGV4LnVtZC5qc1wiXG4gICAgfVxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcIi9kaXN0XCIsXG4gICAgXCIvZGlzdC9zdHlsZS5jc3NcIlxuICBdLFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwicnVuLXAgYnVpbGQ6KlwiLFxuICAgIFwiYnVpbGQ6c2NyaXB0c1wiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkOnR5cGVzXCI6IFwidHNjIC0tZW1pdERlY2xhcmF0aW9uT25seSAmJiB0c2MtYWxpYXNcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4xOC4xMS4xOVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjAuMjdcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMC4xMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI6IFwiXjMuMC4wXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xM1wiLFxuICAgIFwibnBtLXJ1bi1hbGxcIjogXCJeNC4xLjVcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjIxXCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjIuNFwiLFxuICAgIFwidHNjLWFsaWFzXCI6IFwiXjEuOC4yXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjQuOS41XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMS43LjJcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixPQUFPLFdBQVc7QUFDNVcsWUFBWSxVQUFVO0FBQ3RCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDMkNkLHVCQUFvQjtBQUFBLEVBQ2xCLE9BQVM7QUFBQSxFQUNULGFBQWE7QUFDZjs7O0FEakRGLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQVksYUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxNQUN4RCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsSUFDakM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBaUIsZ0JBQWdCLENBQUM7QUFBQSxJQUN6RDtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
