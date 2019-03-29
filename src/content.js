import images from './data.js';

(() => {
  'use strict';

  const proportions = images.reduce((accumulator, { width, height, url }) => {
    const proportion = Math.round(Math.ceil(width / height * 100) / 5 ) * 5 / 100;
    const copy = { ...accumulator };
    copy[proportion] = [...(copy[proportion] || []), url];
    return copy;
  }, {});

  const choose = ({ width, height }) => {
    const proportion = Math.round(Math.ceil(width / height * 100) / 5 ) * 5 / 100;

    const { key: closest } = Object.keys(proportions).reduce((accumulator, key) => {
      const current = parseFloat(key);
      const difference = Math.abs(proportion - current);
      const comparable = { difference, key };
      const copy = parseFloat(accumulator.difference === undefined ? difference : accumulator.difference);
      return difference > copy ? accumulator : comparable;
    }, {});

    const urls = proportions[closest];

    return urls[Math.floor(Math.random() * urls.length)];
  };

  window.onload = () => {
    const imgs = document.querySelectorAll('img');

    for (const img of imgs) {
      img.src = choose(img);
      img.style = `${img.style} max-width: 100%; max-height: 100%;`
    }
  };
})();