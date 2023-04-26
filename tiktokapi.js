const token = ""; // NEVER SHARE!!!
const apiUrl = "https://open.tiktokapis.com/v2/video/list/";

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
  },
  body: JSON.stringify({
    "count": 10,
    "id": 1,
    "type": 5,
    "secUid": "",
    "maxCursor": 0,
    "minCursor": 0,
    "sourceType": 12,
    "appId": 1233,
    "region": "US",
    "language": "en",
    "verifyFp": ""
  })
})
.then(response => response.json())
.then(data => {
  const videos = data["videos"];

  videos.forEach(video => {
    let videoElement = document.createElement("video");
    videoElement.src = video.video.embed_link;
    videoElement.controls = true;
    videoElement.width = 640;
    videoElement.height = 640;
    document.getElementsByClassName("video")[0].appendChild(videoElement);
  });
})
.catch(error => console.error(error));