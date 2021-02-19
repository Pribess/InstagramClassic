const {app, BrowserWindow} = require("electron")
const Instagram = require("instagram-web-api");

app.on("ready", () => {
    const win = new BrowserWindow({
        width: 279,
        height: 499,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule:true
        }
    });

    win.removeMenu();
    win.setResizable(false);
    win.loadFile("./src/login/index.html");
});

app.on("window-all-closed", () => {
    app.quit();
});