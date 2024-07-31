import { app, BrowserWindow } from 'electron'

const createWindow = ()  => {
    const window = new BrowserWindow({
        width:800,
        height:600
    })

    window.loadFile('index.html')
    // window.loadURL('https://example.com/')
}

app.whenReady () .then(createWindow)

// Cuando se cierre la ventana se termina de ejecutar, este mas para los MacOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })