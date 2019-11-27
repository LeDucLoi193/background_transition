var wallpaper = document.createElement('img');
var containerDiv = document.getElementById('container');


wallpaper.addEventListener('load', function(){
	containerDiv.style.backgroundImage = 'url(https://wallpaper.wiki/wp-content/uploads/2017/05/California-beach-wallpaper-desktop-free.jpg)'; 
	containerDiv.style.opacity = '0.8';
});

wallpaper.src = 'https://wallpaper.wiki/wp-content/uploads/2017/05/California-beach-wallpaper-desktop-free.jpg';