document.getElementById("login").onclick = function () {
    console.log("Hi")
    window.location.href = "videoCall.html";
    localStorage["username"] = document.getElementById("username").value;
    localStorage["channelName"] = document.getElementById("channelName").value;
}  