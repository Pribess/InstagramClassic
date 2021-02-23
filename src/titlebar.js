const remote = require("electron").remote;
const win = remote.BrowserWindow.getFocusedWindow();



document.addEventListener('keydown', (event) => {
    if(event.keyCode==123){
        win.webContents.toggleDevTools();
    }
});

function exit() {
    win.close();
}

function minimize() {
    win.minimize();
}