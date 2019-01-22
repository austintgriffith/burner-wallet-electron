const electron = require("electron");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", function() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "assets/icons/png/64x64.png"),
    frame: true
  });
  mainWindow.loadURL("https://xdai.io");
  // Display Dev Tools by default
  //mainWindow.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Prompt users before window close
  mainWindow.on("close", e => {
    // e.preventDefault();
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  app.quit();
});
