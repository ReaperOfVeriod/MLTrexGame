const electron = require("electron");
const url = require("url");
const path = require("path");
//const robot = require('robotjs');

const { app, BrowserWindow } = electron;
let mainWindow;

app.on("ready", function () {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "TrexGame/index.html"),
        protocol: "file:",
        slashes: true
    }));
});
