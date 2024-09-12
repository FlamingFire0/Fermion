const { ipcRenderer } = require("electron")


document.getElementById("minimize").addEventListener("click", () => {
  ipcRenderer.send("minimize-app");
});

document.getElementById("maximize").addEventListener("click", () => {
  ipcRenderer.send("maximize-app");
});

document.getElementById("close").addEventListener("click", () => {
  ipcRenderer.send("close-app");
});

