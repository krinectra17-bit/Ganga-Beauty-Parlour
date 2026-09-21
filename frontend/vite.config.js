import path from "path";
import os from "os";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function publicImagesReloadPlugin() {
  return {
    name: "public-images-reload",
    configureServer(server) {
      const imagesDir = path.resolve(process.cwd(), "public", "images") + path.sep;
      const watchEvents = ["add", "change", "unlink", "addDir", "unlinkDir"];
      for (const ev of watchEvents) {
        server.watcher.on(ev, (file) => {
          try {
            const f = path.resolve(file);
            if (f.startsWith(imagesDir)) {
              server.ws.send({ type: "full-reload" });
            }
          } catch (e) {
          }
        });
      }
    },
  };
}

function noCacheDevPlugin() {
  return {
    name: "dev-no-cache-headers",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        res.setHeader("Cache-Control", "no-store, max-age=0");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
        next();
      });
    },
  };
}

const isDev = process.env.NODE_ENV !== "production";

function getLocalIPv4() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) return net.address;
    }
  }
  return "localhost";
}

const devPlugins = [];
if (isDev) devPlugins.push(publicImagesReloadPlugin(), noCacheDevPlugin());

export default defineConfig({
  plugins: [react(), ...devPlugins],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: Object.assign(
    {
      host: true,
      port: 3000,
      strictPort: false,
      cors: true,
      open: true,
    },
    isDev
      ? {
          hmr: {
            host: getLocalIPv4(),
            protocol: "ws",
            port: 3000,
          },
          watch: {
            usePolling: true,
            interval: 100,
          },
        }
      : {}
  ),
});
