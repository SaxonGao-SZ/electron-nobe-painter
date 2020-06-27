const { app, BrowserWindow } = require('electron');


function createWindow () {   
  let win = new BrowserWindow({
    width: 1366,
    height: 800,
    minWidth: 400,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadFile('public/index.html');
};

app.whenReady().then(createWindow);
