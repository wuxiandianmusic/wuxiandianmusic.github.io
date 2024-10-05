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
            const cover = selectedSong.getElementsByTagName("cover")[0].textContent;
            const fullUrl = window.location.origin + url;
            
            // 更新圆形播放器的封面和iframe播放页面
            document.getElementById('floating-cover').src = cover;
            document.querySelector('.modal-content iframe').src = fullUrl;

            console.log("随机选取的歌曲链接:", fullUrl);
        } else {
            console.error("无法加载歌曲列表！");
        }
    };
    xhr.onerror = function() {
        console.error("请求发生错误！");
    };
    xhr.send();
}

// 页面加载后调用此函数来加载随机歌曲
window.onload = loadXML;
