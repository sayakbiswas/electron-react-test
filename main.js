var app = require('app');
var browserWindow = require('browser-window');

require('crash-reporter').start();

app.on('window-all-closed', function() {
	if(process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new browserWindow({width: 800, height: 600});
	mainWindow.loadUrl('file://' + __dirname + '/public/index.html');
	mainWindow.openDevTools();
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
