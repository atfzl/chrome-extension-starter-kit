const s = document.createElement('script');

const src = chrome.extension.getURL('inject.bundle.js');

s.src = src;
s.onload = function() {
  this.remove();
};

document.documentElement.appendChild(s);
