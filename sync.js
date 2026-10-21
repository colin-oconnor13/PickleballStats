// Dink Data moved to https://colin-oconnor13.github.io/DinkData/. PB Sync bookmarks made before
// the move load this file; it hands over to the new sync code, which returns the data to the new
// address. Nobody has to redo their bookmark.
(function () {
  var s = document.createElement('script');
  s.src = 'https://colin-oconnor13.github.io/DinkData/sync.js?' + Date.now();
  s.onerror = function () { alert('PB Sync could not load https://colin-oconnor13.github.io/DinkData/sync.js. Check your connection and try again.'); };
  document.body.appendChild(s);
})();
