var inviteBtn = document.getElementById('invite-btn');

inviteBtn.addEventListener('click', function() {
    
    chrome.tabs.executeScript(null, {file: "js/content.js"});
    
});