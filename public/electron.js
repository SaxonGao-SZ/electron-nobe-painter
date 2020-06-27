const { app, BrowserWindow } = require('electron');
const {port} = require('./config');
const defaultParams = {
  'ENV': 'production',
};

const param = (function(){
  let list = process.argv, len = list.length, tmp = [], par={};
  for( let i = 0 ; i < len ; i++) {
    if(i <= 1) {
      continue;
    }
    tmp = list[i].split('=');
    if(typeof defaultParams[tmp[0].toUpperCase()]) {
      par[tmp[0]] = tmp[1].toUpperCase();
    } else{
      continue;
    }
  }
  return par;
})();

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
  if(param.ENV === 'development') {
    win.loadFile('public/index.html');
  } else {
    win.loadURL(`http://localhost:${port}`);
  }
};

app.whenReady().then(createWindow);
