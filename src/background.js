import images from './data.js';

(() => {
  'use strict';

  const urls = images.map(({ url }) => url);
  const { length } = urls;

  chrome.webRequest.onBeforeRequest.addListener(({ url }) => {
    if (urls.includes(url)) return;

    const redirectUrl = urls[Math.floor(Math.random() * length)];

    return { redirectUrl };
  },
  { urls: ["<all_urls>"], types: ['image'] },
  ["blocking"]);
})();