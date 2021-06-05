const {app, BrowserWindow, menu, globalShortcut} = require('electron');
//janela principal
let mainWindow;

//cria janela
async function createWindow(){
    mainWindow = new BrowserWindow({
        icon: "assets/images/icone.ico",
        resizable: false
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.maximize();

    globalShortcut.unregisterAll(); 

    await mainWindow.loadFile('src/pages/index.html');

    globalShortcut.unregisterAll(); 
}

//ON ready
app.whenReady().then(createWindow);
