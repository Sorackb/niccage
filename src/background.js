import images from './data.js';

(() => {
  'use strict';

  const urls = images.map(({ url }) => url);
  // Shuffle
  urls.sort(() => Math.random() - 0.5);

  chrome.webRequest.onBeforeRequest.addListener(({ url }) => {

    if (urls.includes(url)) {
      return { redirectUrl: url };
    }

    const redirectUrl = urls.shift();
    images.push(redirectUrl);

    return { redirectUrl };
  },
  { urls: ["<all_urls>"], types: ['image'] },
  ["blocking"]);
})();