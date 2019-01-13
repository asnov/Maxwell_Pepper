var sendBtn = document.getElementById("send_btn");
var textMsg = document.getElementById("msg_box");

function sendCmd(msg) {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        chrome.tabs.sendMessage(tabs[0].id, {cmd: msg}, function(response) {});
        
    });
    
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    
  if (changeInfo.status == 'complete') {
      
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        var tabId = tabs[0];
        
        if(tabId) {
            var tabUrl = tabId.url;
            if(tabUrl.indexOf("https://www.facebook.com/messages") >= 0) {
                chrome.tabs.executeScript(null, {file: "js/content.js"});
                sendCmd("start");
            }
        }
    });   
  }    
});

chrome.runtime.onConnect.addListener(function(port) {
  
    console.assert(port.name == "panel");
    
    port.onMessage.addListener(function(msg) {
    
        if(msg) {
            
        }
    });
});