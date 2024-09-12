const { app, BrowserWindow, ipcMain } = require("electron");



let win

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

app.on("ready", () => {


  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });


  win.loadFile("index.html");

  ipcMain.on("minimize-app", () => {win.minimize()});
  ipcMain.on("maximize-app", () => {win.maximize()});
  ipcMain.on("close-app", () => {win.close()});
})

