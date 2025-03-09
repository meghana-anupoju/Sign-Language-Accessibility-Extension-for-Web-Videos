document.addEventListener("DOMContentLoaded", () => {
  let videos = document.querySelectorAll("video");
  if (videos.length > 0) {
    let overlay = document.createElement("div");
    overlay.innerHTML = '<iframe src="overlay.html" style="width:300px; height:200px; position:fixed; bottom:10px; right:10px; z-index:10000;"></iframe>';
    document.body.appendChild(overlay);
  }
});