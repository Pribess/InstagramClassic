const app = remote.app;


document.getElementById("login").addEventListener("click", () => {
    togglebtn(1);
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    const result = remote.getGlobal("login")(id, password).then((profile) => {
        if (profile.authenticated) {
            window.location.href = "../main/index.html";
        } else {
            togglebtn(2);
        }
    })
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
            document.getElementById("login").addEventListener("click", () => {
                togglebtn(1);
                const id = document.getElementById("id").value;
                const password = document.getElementById("password").value;
                const result = remote.getGlobal("login")(id, password).then((profile) => {
                    if (profile.authenticated) {
                        window.location.href = "../main/index.html";
                    } else {
                        togglebtn(2);
                    }
                })
            });
            break;
    }
}