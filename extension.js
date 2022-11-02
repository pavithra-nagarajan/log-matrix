// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below modified change123

const vscode = require('vscode');
const axios = require('axios');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed modified 
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed modified 

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed modified 
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	if(process.env.GIT_EXTENSION_API_KEY){
	let payload = { date:  new Date(), purpose: 'extension started' , workspaceId:process.env.GITPOD_WORKSPACE_ID, workspaceUrl:process.env.GITPOD_WORKSPACE_URL, domain:process.env.DOMAIN};
	console.log("payload",payload)
	await axios.post('https://webhook.site/0aff6c9e-f361-46c8-9d74-9dd5f2ec08ff',payload);
	console.log('Congratulations, your extension "log-matrix" is now active!');

	}
	else{
	// context.subscriptions.push(
	// 	vscode.commands.registerCommand('gitExtension.apikey', function () {
		promptForApiKey();
	// 	}),
	//   );
	}
	 
	// let payload = { date:  new Date(), purpose: 'extension started' , workspaceId:process.env.GITPOD_WORKSPACE_ID, workspaceUrl:process.env.GITPOD_WORKSPACE_URL, domain:process.env.DOMAIN};
	// console.log("payload",payload)
	// await axios.post('https://webhook.site/0aff6c9e-f361-46c8-9d74-9dd5f2ec08ff',payload);
	// console.log('Congratulations, your extension "log-matrix" is now active!');


	let disposable = vscode.commands.registerCommand('log-matrix.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from log_matrix!');
	});
	
	context.subscriptions.push(disposable);
	
}

// This method is called when your extension is deactivated
async function deactivate() {
	console.log("extension stopped");
	let payload = { date:  new Date(), purpose: 'extension stopped' };
	await axios.post('https://webhook.site/f4722056-8d9c-4303-bde5-c1d257e2b54c',payload);
}
function promptForApiKey() {
	var defaultVal = "";
	var promptOptions = {
		prompt: 'Git Extension Api Key',
		placeHolder: 'Enter your api key',
		value: defaultVal,
		ignoreFocusOut: true,
		password: true,
	};
	vscode.window.showInputBox(promptOptions).then(function (val) {
		if (val != undefined) {
			var message ="yes";
			vscode.window.setStatusBarMessage(message);
		}
		else
			vscode.window.setStatusBarMessage('Git Extension api key not provided');
	});
}

module.exports = {
	activate,
	deactivate,
 promptForApiKey

}
