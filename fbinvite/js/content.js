/*var port = chrome.runtime.connect({name: "panel"});

chrome.runtime.onMessage.addListener(function(msg) {

    if(msg.cmd == "start") {
        selectContact();
    }
    
});*/

var invites = 0;
var invitedCount = 0;
var likeCount = 0;
var counter = 0;
var offset = 0;

$("._42ft._4jy0._4jy3._517h._51sy").each(function(index) {
    if($(this).attr('ajaxify') && $(this).text() == "Invite") {
        invites++;
        var $that = $(this);
        setTimeout(function() {
            $that.hide();
        }, 5000 + offset);
        offset += 5000;
    }

    if($(this).text() == "Liked") {
        likeCount++;
    }

    if($(this).text() == "Invited") {
        invitedCount++;
    }
});

/*alert("Invites found: " + invites + " Likes: " + likeCount + " Invited: " + invitedCount);*/