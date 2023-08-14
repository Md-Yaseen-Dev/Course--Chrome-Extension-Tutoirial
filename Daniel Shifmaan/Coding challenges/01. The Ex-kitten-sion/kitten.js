console.log("Kittens are pretty, unite as one");

let filenames = ["01.lucky.jpg",
"02.blueEyes.jpg",
"03.sleepy.jpg",
"04.stronger.jpg",
"05.moffi.jpg"];

let imgs = document.getElementsByTagName('img')
// let imgs = document.querySelectorAll('img[src*="/kittens/"]')

for(imgEl of imgs){

    let r = Math.floor(Math.random() * filenames.length);
    let file = "kittens/" + filenames[r];
    let url = chrome.runtime.getURL(file)
    imgE1.src = url;
    console.log(url)
}


/*
Changed web_accessible_resources to host_permissions to grant the extension permission to access images on all URLs. if it is not images

Changed chrome.extension.getURL() to chrome.runtime.getURL().
*/
