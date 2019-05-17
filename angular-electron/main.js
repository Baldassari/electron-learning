import { dirname } from "path";

const {app, BrowserWindow} = require{'electron'}

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${___dirname}/dist/assets/logo.png`
    })
}
