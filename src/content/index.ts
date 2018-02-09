const s = document.createElement('script');

const src = chrome.extension.getURL('inject.bundle.js');

console.log(src);

s.src = src;
s.onload = function() {
  this.remove();
};

document.head.appendChild(s);
