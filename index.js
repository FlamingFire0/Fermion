const { app, BrowserWindow } = require("electron")




app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

app.on("ready", main)

function main() {
  
  const window = new BrowserWindow({ width: 800, height: 600,})

  

  window.menuBarVisible = false
  window
  window.loadFile("index.html")


}

