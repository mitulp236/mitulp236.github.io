/* Rocket Tools (mitulpatel.in build) — the suite is locked to the single
   neo-brutalist orange theme that matches the rest of the site. No switcher. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.setAttribute('data-theme', 'neo');
  try { localStorage.setItem('rt-theme', 'neo'); } catch (e) {}
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', '#fff4e6');
})();
