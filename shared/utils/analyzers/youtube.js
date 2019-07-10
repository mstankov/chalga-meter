// Process current page after determining the domain is 'youtube'
const process = () => {
    const isPlayingVideo = isUserPlayingVideo();

    if (isPlayingVideo) {
        const currentVideoTitle = getVideoTitle();
        // TODO: Determine if title is chalga and process if necessary
    } else {
        const sbValue = getSearchboxValue();
        // TODO: Determine if value is chalga and process if necessary
    }
}

// Get Youtube's Searchbox value
const getSearchboxValue = () => document.querySelector('#search-form input#search').value;

// Get Current playing video's title
const getVideoTitle = () => document.querySelector('div#info-contents h1.title yt-formatted-string').innerText;

// Determine whether user is currently playing vid
const isUserPlayingVideo = () => window.location.href.indexOf('/watch?v=') > -1;

module.exports = {
    process
};
