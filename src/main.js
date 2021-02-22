const {app, BrowserWindow, ipcRenderer, ipcMain} = require("electron");
const { remote } = require("electron/renderer");

const Instagram = require("instagram-web-api");

let client;
let myprofile;


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

global.login = (username, password) => {
    client = new Instagram({username: username, password: password});
    try {
        client.login();
        return 0;
    } catch (e) {
        return 2;
    }
}