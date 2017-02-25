const electron = require("electron");

const app = electron.app;

var menubar = require('menubar')

var mb = menubar()

mb.on('ready', function ready () {
})
app.on('window-all-closed', () => {})
var shouldQuit = app.makeSingleInstance((argv, workingDirectory) => {
})
if (shouldQuit) app.quit()
