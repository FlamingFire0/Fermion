const { app, BrowserWindow } = require("electron")


const devServer = require("electron-reload")
const path = require("path")

// Use a precompiled Electron binary if possible
const electronPath = path.join(__dirname, "node_modules", ".bin", "electron")

devServer(path.join(__dirname, ".."), {
  electron: electronPath,
  // Exclude unnecessary files
  excludes: ["node_modules/**/*", "dist/**/*", "temp/**/*"],
  // Watch only necessary files
  watch: ["src/**/*", "public/**/*"],
  // Enable caching with appropriate settings
  cache: true,
  cacheMaxAge: 3600000, // 1 hour
})


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

app.on("ready", main)

function main() {
  
  const window = new BrowserWindow({ width: 800, height: 600,})

  window.

  window.menuBarVisible = false
  window.loadFile("index.html")


}

