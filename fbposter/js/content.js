var port = chrome.runtime.connect({name: "panel"});
var contacts = document.getElementsByClassName("_1ht6");
var i = 0; 

function scrollContacts() {
    
    setInterval(function() {
        $('.uiScrollableAreaWrap.scrollable').scrollTop($('.uiScrollableAreaWrap.scrollable')[0].scrollHeight);
        
    }, 5000);
    
}

function selectContact() {
    setTimeout(function () {     
      contacts[i].click();
      console.log(i);
      i++;                     
      if (i <= contacts.length) {            
         selectContact(); 
      }                        
   }, 5000);
}

chrome.runtime.onMessage.addListener(function(msg) {

    if(msg.cmd == "start") {
        scrollContacts();
    }
    
});    