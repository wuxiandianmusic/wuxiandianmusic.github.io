function loadXML() {
    return new Promise((resolve, reject) => {
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
                resolve(fullUrl);  // 将结果通过 resolve 返回
            } else {
                console.error("无法加载歌曲列表！");
                reject("加载失败");
            }
        };
        xhr.onerror = function() {
            console.error("请求发生错误！");
            reject("请求失败");
        };
        xhr.send();
    });
}
