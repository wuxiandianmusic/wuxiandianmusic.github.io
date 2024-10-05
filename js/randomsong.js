function loadXML() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/search/songs.xml", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            const songs = xml.getElementsByTagName("song");
            const randomIndex = Math.floor(Math.random() * songs.length);
            const selectedSong = songs[randomIndex];
            
            const url = selectedSong.getElementsByTagName("url")[0].textContent;
            const fullUrl = window.location.origin + url;
            
            console.log("完整链接:", fullUrl);
            return fullUrl;
        } else {
            console.error("无法加载歌曲列表！");
        }
    };
    xhr.onerror = function() {
        console.error("请求发生错误！");
    };
    xhr.send();
}
