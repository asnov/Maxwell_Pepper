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

function clicker(el) {
    const targetClass = 'to-click';
    el.addClass(targetClass);
}

$("._42ft._4jy0._4jy3._517h._51sy").each(function(index) {
    if($(this).attr('ajaxify') && $(this).text().trim() == "Invite") {
        invites++;
        var $that = $(this);
        setTimeout(function() {
            clicker($that);
        }, 1000 + offset);
        offset += 1000;
    }

    if($(this).text().trim() == "Liked") {
        likeCount++;
    }

    if($(this).text().trim() == "Invited") {
        invitedCount++;
    }
});

console.log(`invites:${invites}, invitedCount:${invitedCount}, likeCount:${likeCount}`);

/*alert("Invites found: " + invites + " Likes: " + likeCount + " Invited: " + invitedCount);*/
