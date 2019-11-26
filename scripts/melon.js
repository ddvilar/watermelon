function construct_playlist(xhr) {

    let response = xhr.responseText;
    let div = document.createElement('div');
    div.innerHTML = response;

    let rankAr = div.querySelectorAll('#lst50 .rank, #lst100 .rank');
    let titleAr = div.querySelectorAll('.rank01>span>a');
    let artistAr = div.querySelectorAll('.rank02>span>a');
    let artAr = div.querySelectorAll('.image_typeAll>img');
    
    let playlist = document.querySelector('#playlist_container');
    playlist.innerHTML = "";

    let top10 = document.createElement('div');
    top10.classList.add('top10');
    top10.classList.add('active');
    playlist.appendChild(top10);

    let top20 = document.createElement('div');
    top20.classList.add('top20');
    playlist.appendChild(top20);

    let top30 = document.createElement('div');
    top30.classList.add('top30');
    playlist.appendChild(top30);
     
    for (var i = 0; i < 100; i++) {

        // List 1 - 10
        if(i >= 0 && i < 10) {
            // Container
            let big_container = document.createElement('div');
            big_container.classList.add('playlist_wrapper');
            top10.appendChild(big_container);

            let content_container = document.createElement('div');
            content_container.classList.add('playlist', 'dark');
            big_container.appendChild(content_container);

            // Rank
            let rank = rankAr[i];
            div.appendChild(rank);
            let rankDiv = document.createElement('div');
            rankDiv.classList.add('ranks');
            content_container.appendChild(rankDiv);
            rankDiv.appendChild(rank);
            
            // Album Art
            let art = artAr[i];
            div.appendChild(art);
            let artDiv = document.createElement('div');
            artDiv.classList.add('art_img');
            content_container.appendChild(artDiv);
            artDiv.appendChild(art);

            // Artist and Song 
            let artist = artistAr[i].textContent;
            let title = titleAr[i].textContent;
            let musicDiv = document.createElement('div');
            musicDiv.classList.add('music');
            musicDiv.innerHTML = `<p class='artist'>${artist}</p>
                                <p class='song-title'>${title}</p>`;
            content_container.appendChild(musicDiv);

            // Video Player
            let youtube_box = document.createElement('div');
            youtube_box.classList.add('youtube_box');
            document.body.appendChild(youtube_box);

            // Youtube
            content_container.addEventListener("click", function (e) {
                
            let clicked_playlist = e.currentTarget;
            let title = clicked_playlist.querySelector(".song-title").textContent;
            let artist = clicked_playlist.querySelector(".artist").textContent;
            
            if (window.getComputedStyle(youtube_box, null).getPropertyValue("display") === "none") {
                youtube_box.classList.add('closeModal');
                youtube_box.style.display = "flex";

                let youtubeID = getYoutube(title, artist);
                youtube_box.innerHTML = `<div class="ytvideo">
                                            <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/${youtubeID}" frameborder="0"></iframe>
                                            <span class='closeDiv'>X</span>
                                         </div>
                
                `;
                
                let closeDiv = document.querySelector('.closeDiv');
                
                closeDiv.addEventListener('click', function() {
                    youtube_box.style.display = "none";
                    youtube_box.innerHTML = '';
                });
                        

            } else {
                youtube_box.style.display = "";
                youtube_box.style.position = "";
            }

            });
        }

        // List 11 - 20
        if(i >= 10 && i < 20) {
            // Container
            let big_container = document.createElement('div');
            big_container.classList.add('playlist_wrapper');
            top20.appendChild(big_container);

            let content_container = document.createElement('div');
            content_container.classList.add('playlist', 'dark');
            big_container.appendChild(content_container);

            // Video Player
            let youtube_box = document.createElement('div');
            youtube_box.classList.add('youtube_box');
            big_container.appendChild(youtube_box);

            // Rank
            let rank = rankAr[i];
            div.appendChild(rank);
            let rankDiv = document.createElement('div');
            rankDiv.classList.add('ranks');
            content_container.appendChild(rankDiv);
            rankDiv.appendChild(rank);
            
            // Album Art
            let art = artAr[i];
            div.appendChild(art);
            let artDiv = document.createElement('div');
            artDiv.classList.add('art_img');
            content_container.appendChild(artDiv);
            artDiv.appendChild(art);

            // Artist and Song 
            let artist = artistAr[i].textContent;
            let title = titleAr[i].textContent;
            let musicDiv = document.createElement('div');
            musicDiv.classList.add('music');
            musicDiv.innerHTML = `<p class='artist'>${artist}</p>
                                <p class='song-title'>${title}</p>`;
            content_container.appendChild(musicDiv);

            // Youtube
            content_container.addEventListener("click", function (e) {
                
            let clicked_playlist = e.currentTarget;
            let title = clicked_playlist.querySelector(".song-title").textContent;
            let artist = clicked_playlist.querySelector(".artist").textContent;
            let youtube_box = e.currentTarget.nextElementSibling;
            if (window.getComputedStyle(youtube_box, null).getPropertyValue("display") === "none") {
                youtube_box.classList.add('closeModal');
                youtube_box.style.display = "block";

                let youtubeID = getYoutube(title, artist);
                e.currentTarget.nextElementSibling.innerHTML = ' <div class"ytvideo"><iframe id="ytplayer" type="text/html" width="896" height="504" src="https://www.youtube.com/embed/' + youtubeID + '"frameborder="0"></iframe></div>';
                
                let closeDiv = document.createElement('div');
                closeDiv.textContent = "X"
                closeDiv.classList.add('closeDiv');
                youtube_box.appendChild(closeDiv);
                
                closeDiv.addEventListener('click', function(e) {
                    youtube_box.style.display = "none";
                });
                        

            } else {
                youtube_box.style.display = "";
                youtube_box.style.position = "";
            }

            });
        }

        // List 21 - 30
        if(i >= 20 && i < 30) {
            // Container
            let big_container = document.createElement('div');
            big_container.classList.add('playlist_wrapper');
            top30.appendChild(big_container);

            let content_container = document.createElement('div');
            content_container.classList.add('playlist', 'dark');
            big_container.appendChild(content_container);

            // Video Player
            let youtube_box = document.createElement('div');
            youtube_box.classList.add('youtube_box');
            big_container.appendChild(youtube_box);

            // Rank
            let rank = rankAr[i];
            div.appendChild(rank);
            let rankDiv = document.createElement('div');
            rankDiv.classList.add('ranks');
            content_container.appendChild(rankDiv);
            rankDiv.appendChild(rank);
            
            // Album Art
            let art = artAr[i];
            div.appendChild(art);
            let artDiv = document.createElement('div');
            artDiv.classList.add('art_img');
            content_container.appendChild(artDiv);
            artDiv.appendChild(art);

            // Artist and Song 
            let artist = artistAr[i].textContent;
            let title = titleAr[i].textContent;
            let musicDiv = document.createElement('div');
            musicDiv.classList.add('music');
            musicDiv.innerHTML = `<p class='artist'>${artist}</p>
                                <p class='song-title'>${title}</p>`;
            content_container.appendChild(musicDiv);

            // Youtube
            content_container.addEventListener("click", function (e) {
                
            let clicked_playlist = e.currentTarget;
            let title = clicked_playlist.querySelector(".song-title").textContent;
            let artist = clicked_playlist.querySelector(".artist").textContent;
            let youtube_box = e.currentTarget.nextElementSibling;
            if (window.getComputedStyle(youtube_box, null).getPropertyValue("display") === "none") {
                youtube_box.classList.add('closeModal');
                youtube_box.style.display = "block";

                let youtubeID = getYoutube(title, artist);
                e.currentTarget.nextElementSibling.innerHTML = ' <div class"ytvideo"><iframe id="ytplayer" type="text/html" width="896" height="504" src="https://www.youtube.com/embed/' + youtubeID + '"frameborder="0"></iframe></div>';
                
                let closeDiv = document.createElement('div');
                closeDiv.textContent = "X"
                closeDiv.classList.add('closeDiv');
                youtube_box.appendChild(closeDiv);
                
                closeDiv.addEventListener('click', function(e) {
                    youtube_box.style.display = "none";
                });
                        
            } else {
                youtube_box.style.display = "";
                youtube_box.style.position = "";
            }

            });
        }

    }
        
    let changeTop10 = document.querySelector('.first10');
    changeTop10.classList.add('activeList');
    let changeTop20 = document.querySelector('.first20');
    let changeTop30 = document.querySelector('.first30');

    changeTop10.addEventListener('click', function(e){
        
        top10.classList.add('active');
        top20.classList.remove('active');
        top30.classList.remove('active');

        changeTop10.classList.add('activeList');
        changeTop20.classList.remove('activeList');
        changeTop30.classList.remove('activeList');

        console.log('Im here');
    });

    changeTop20.addEventListener('click', function(e){

        top20.classList.add('active');
        top10.classList.remove('active');
        top30.classList.remove('active');

        changeTop20.classList.add('activeList');
        changeTop10.classList.remove('activeList');
        changeTop30.classList.remove('activeList');
    });

    changeTop30.addEventListener('click', function(e){

        top30.classList.add('active');
        top10.classList.remove('active');
        top20.classList.remove('active');

        changeTop30.classList.add('activeList');
        changeTop10.classList.remove('activeList');
        changeTop20.classList.remove('activeList');
    });

}

function getPlaylist(param) {
    // console.log(param);
    // https://cors-anywhere.herokuapp.com/
    var xhr = new XMLHttpRequest();
    var url = 'https://www.melon.com/chart/day/index.htm?classCd=' + param;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        // console.log(xhr);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        
            construct_playlist(xhr);
        }
    }
    xhr.send();
}

function getYoutube(title, artist) {
    var yxhr = new XMLHttpRequest();
    var key = "AIzaSyBYsluqjq69jAJpOEQEtg6ntXYBhcnjmXM";
    // var key = 'AIzaSyA34_NK9klkcuZKI6kNG6QNMkPkm5mEVnc';
    var video_id;
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + artist + ',' + title + '&key=' + key;

    yxhr.open('GET', url, false);
    yxhr.onreadystatechange = function () {
        if (yxhr.readyState === XMLHttpRequest.DONE && yxhr.status === 200) {
            let objectYT = JSON.parse(yxhr.responseText);
            // console.log(yxhr.responseText);
            video_id = objectYT.items[0].id.videoId;
        }
    }
    yxhr.send();
    return video_id;
}

{

    let genre_container = document.querySelectorAll(".genre_container > div");
    genre_container[0].classList.add('activeGenre');

    
    for (let i = 0; i < genre_container.length; i++) {
        let div = genre_container[i];
        let genre_filter = document.querySelector("#" + div.id).getAttribute("data-filter");
        div.addEventListener("click", function () {
            getPlaylist(genre_filter);
            
            // remove class from sibling
            let genre = genre_container[0];

            while(genre) {
                if(genre.tagName === 'DIV') {
                    genre.classList.remove('activeGenre');
                } 
                genre = genre.nextSibling;
            }

            this.classList.add('activeGenre');

            // Close Hamburger menu when clicked on the genre
            if(document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
            }
            

        });
        if (i == 0) {
            getPlaylist(genre_filter);
        }
    }
}


const navToggle = document.querySelector('.hamburger_container');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});


