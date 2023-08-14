console.log("background color is running");

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        txt:"hello"
    }
chrome.tabs.sendMessage(tab.id, msg)
}

/* 
 Note 1. using chrome.action instead of chrome.browser_action.

 --------in manifest json follow this steps for manifest v3
 2. use manifest :v3 instead v2 [deprected]
 3. use action instead of browser_action
 4. using background.service_worker instead of background.script

 5. Don't use square brackets in background.js . use ["background.js"] in v2
 */
