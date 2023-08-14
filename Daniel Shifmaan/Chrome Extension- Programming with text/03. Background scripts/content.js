console.log("chrome extension go?");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
  if (message.txt == "hello") {
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs) {
      elt.style["background-color"] = "grey";
    }
  }
}

// not working message, sender, sendResponse in function due to manifest v3.

//  only message is working
