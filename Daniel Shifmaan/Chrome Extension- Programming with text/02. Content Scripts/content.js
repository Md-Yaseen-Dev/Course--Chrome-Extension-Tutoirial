console.log("chrome extension go?");


let paragraphs = document.getElementsByTagName("p");

for(elt of paragraphs){
    elt.style['background-color'] = "skyblue";
}


// // /*
// - You can use these urls in matches
// 1. '*://*shiffman*'
// 2. '*://*github*'
// 3. 'http://shiffaman.net/*
// 4. 'https://shiffaman.net/*'
// Note; it will match for only that links.
// */