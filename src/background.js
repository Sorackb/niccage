import images from './data.js';

(() => {
  'use strict';

  const urls = images.map(({ url }) => url);
  // Shuffle
  urls.sort(() => Math.random() - 0.5);

  const circular = (array) => {
    let current = 0;

    return () => array[current++ % array.length];
  };

  const next = circular(urls);

  chrome.webRequest.onBeforeRequest.addListener(({ url }) => {

    if (!urls.includes(url)) {
      const redirectUrl = next();
      return { redirectUrl };
    }
  },
  { urls: ["<all_urls>"], types: ['image'] },
  ["blocking"]);
})();