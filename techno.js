var Url = [
"https://youtube.com/embed/IoTt3GSlMeM",
"https://youtube.com/embed/1E0XZWaee7s",
"https://youtube.com/embed/tdehQu0wFwU",
"https://youtube.com/embed/nxZj6XVJFv8",
"https://youtube.com/embed/F5lKWyVI1XA",
"https://youtube.com/embed/RIX_onJe4NQ",
"https://youtube.com/embed/pQO_aN3Rt5w"
];

vidEmbed = document.getElementById("embed");

function getUrl(vidEmbed) {
    var index = Math.floor(Math.random() * Url.length);
    var link = Url[index];
    
    vidEmbed.src = url;
}

function innitiation() {
  getRandomUrl(myFrame);
}

innitiation();

console.log(vidEmbed.src)