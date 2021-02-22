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

document.getElementById("login").addEventListener("click", () => {
    togglebtn(1);
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    togglebtn(remote.getGlobal("login")(id, password));
});

function togglebtn(index) {
    switch (index) {
        case 0:
            document.getElementById("change").innerHTML = '<div class="wrapper1"><div class="wrapper2"><input type="button" value="Log in" class="login" id="login"></div></div>';
            break;
        case 1:
            document.getElementById("change").innerHTML = '<img src="../asset/loading.gif" class="loading" style="height: 30px; width: 30px;">';
            break;
        case 2:
            document.getElementById("change").innerHTML = '<div class="wrapper1"><div class="wrapper2"><input type="button" value="Log in" class="login" id="login"></div></div><div class="error">Error Occured When Login</div>';
            break;
    }
}