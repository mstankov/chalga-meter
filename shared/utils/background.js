// Init background check once page has completed loading
chrome.webNavigation.onCompleted.addListener(function() {
    chrome.tabs.executeScript({
        file: 'background.js'
    });
})
