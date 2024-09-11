const { app, BrowserWindow } = require("electron");
const path = require("path");

const devServer = require("electron-reload");
devServer(path.join(__dirname, ".."), {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

