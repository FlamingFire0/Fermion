const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");




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
      contextIsolation: false,
    },
    icon: "img/fermion.svg",
  });




  win.loadFile("index.html");

  ipcMain.on("close-app", () => {win.close()});
  ipcMain.on("minimize-app", () => {win.minimize()});
  ipcMain.on("maximize-app", () => {
    if (win.isMaximized()) {
      win.restore()
    } else {
      win.maximize()
    }
  });
})

