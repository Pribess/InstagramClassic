const remote = require("electron").remote;
const {ipcMain, ipcRenderer} = require("electron");

const win = remote.BrowserWindow.getFocusedWindow();
const app = remote.app;


document.addEventListener('keydown', (event) => {
    if(event.keyCode==123){
        win.webContents.toggleDevTools();
    }
});

document.getElementById("exit").addEventListener("click", () => {
    win.close();
});

document.getElementById("minimize").addEventListener("click", () => {
    win.minimize();
});