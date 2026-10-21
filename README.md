# PickleballStats → Dink Data

This app moved to **<https://colin-oconnor13.github.io/DinkData/>** (repo
[colin-oconnor13/DinkData](https://github.com/colin-oconnor13/DinkData)).

This repo only keeps the old address working:

- `index.html` and `404.html` forward every old address to the same place on the new site,
  keeping the `?query` and `#fragment` (so sync hand-offs, `?demo=1` and `?bm=1` still work), and
  retire the old site's service worker.
- `sync.js` is loaded by PB Sync bookmarks made before the move; it loads the new site's
  `sync.js`, so those bookmarks keep working unchanged.
