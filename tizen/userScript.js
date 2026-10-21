/* Stream Manager — TizenBrew module.
 * Intentionally tiny: the TV player, subtitles and remote handling are served by
 * the site itself (assets/tizen.js, loaded for every Samsung TV), so they update
 * the moment the server does — no module release needed. This only marks the
 * page as running inside TizenBrew. */
window.SM_TIZENBREW = true;
