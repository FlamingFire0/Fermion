const remote = require("electron").remote

var minimize = document.getElementById("minimize")
var maximize = document.getElementById("maximize")
var close = document.getElementById("close")


minimize.addEventListener("click", () => {console.log("fasz")})
maximize.addEventListener("click", maximizeApp);
close.addEventListener("click", closeApp);

function minimizeApp() {
    remote.BrowserWindow.getFocusedWindow().minimize()
}

function maximizeApp() {
    remote.BrowserWindow.getFocusedWindow().maximize()
}

function closeApp() {
    remote.getCurrentWindow().close()
}

