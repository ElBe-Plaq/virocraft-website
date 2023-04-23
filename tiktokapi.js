const clientId = 'awmbs1tl37wl2g91';
const clientSecret = '3e6c0464d220e32d9a0ce2163031d7e6';
const apiUrl = 'https://api.tiktok.com/api/item_list/';

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-TT-SDK-CLIENT-KET': clientId,
    'X-TT-SDK-CLIENT-SECRET': clientSecret,
  },
  body: JSON.stringify({
    'count': 10,
    'id': 1,
    'type': 5,
    'secUid': '',
    'maxCursor': 0,
    'minCursor': 0,
    'sourceType': 12,
    'appId': 1233,
    'region': 'US',
    'language': 'en',
    'verifyFp': ''
  })
})
.then(response => response.json())
.then(data => {
  const videos = data.itemList;

  // Loop through the videos and create a video element for each one
  videos.forEach(video => {
    const videoElement = document.createElement('video');
    videoElement.src = video.video.playAddr;
    videoElement.controls = true;
    videoElement.width = 640;
    videoElement.height = 640;
    document.querySelector('.videos').appendChild(videoElement);
  });
})
.catch(error => console.error(error));