/**
 * Cinema Noir icon set.
 *
 * Fine hairline glyphs on a 24×24 grid: 1.5-unit strokes in `currentColor`,
 * square caps and mitred joins, no fills except the play/pause solids (which
 * must read at 18px) and the small filled details in the PiP/AirPlay/Cast
 * "connected" states. Registered over the Scaffold family so every
 * `<media-icon family="scaffold">` in the skin markup renders the Noir
 * versions, in the same string format the Scaffold icons use.
 */

const svg = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${body}</svg>`;

const filled = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${body}</svg>`;

/** Slender filled triangle — the one solid glyph, echoing a title-card arrow. */
export const playIcon = filled(`<path d="M8.5 4.8v14.4L19.6 12z"/>`);

export const pauseIcon = filled(`<rect x="6.4" y="4.8" width="3.6" height="14.4"/><rect x="14" y="4.8" width="3.6" height="14.4"/>`);

/** Hairline circular arrow, counter-clockwise, arrowhead at the top. */
export const restartIcon = svg(
  `<path d="M5.6 8.2A8.4 8.4 0 1 1 3.8 13"/>` + `<path d="M3.6 3.8v4.6h4.6"/>`,
);

/** Twin outlined chevrons — skip forward (the back variant is flipped by CSS). */
export const seekIcon = svg(`<path d="M5 5.8 11.4 12 5 18.2"/><path d="M12.6 5.8 19 12l-6.4 6.2"/>`);

const speaker = `<path d="M3.8 9.4v5.2h3.4L12 18.8V5.2L7.2 9.4z"/>`;

export const volumeHighIcon = svg(
  speaker + `<path d="M15.4 9.8a3.4 3.4 0 0 1 0 4.4"/><path d="M17.8 7.2a7.2 7.2 0 0 1 0 9.6"/>`,
);

export const volumeLowIcon = svg(speaker + `<path d="M15.4 9.8a3.4 3.4 0 0 1 0 4.4"/>`);

export const volumeOffIcon = svg(speaker + `<path d="M15.6 9.6l5 5M20.6 9.6l-5 5"/>`);

const captionsFrame = `<rect x="3" y="5.4" width="18" height="13.2"/>`;

/** Two hairline "C" letterforms inside the frame. */
const captionsCs =
  `<path d="M10.2 10.3c-.5-.8-1.9-.9-2.6-.1-.7.9-.7 2.7 0 3.6.7.8 2.1.7 2.6-.1"/>` +
  `<path d="M17.2 10.3c-.5-.8-1.9-.9-2.6-.1-.7.9-.7 2.7 0 3.6.7.8 2.1.7 2.6-.1"/>`;

export const captionsOffIcon = svg(captionsFrame);

export const captionsOnIcon = svg(captionsFrame + captionsCs);

export const checkIcon = svg(`<path d="M4.6 12.6l4.8 4.8L19.4 6.8"/>`);

export const chevronIcon = svg(`<path d="M9.2 5.4 15.8 12l-6.6 6.6"/>`);

export const fullscreenEnterIcon = svg(
  `<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`,
);

export const fullscreenExitIcon = svg(
  `<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>`,
);

/** Hairline gear: a thin ring with eight short spokes. */
export const gearIcon = svg(
  `<circle cx="12" cy="12" r="3.1"/>` +
    `<path d="M12 4.4v2.5M12 17.1v2.5M4.4 12h2.5M17.1 12h2.5M6.6 6.6l1.8 1.8M15.6 15.6l1.8 1.8M17.4 6.6l-1.8 1.8M8.4 15.6l-1.8 1.8"/>`,
);

export const pipEnterIcon = svg(
  `<rect x="3" y="5" width="18" height="14"/>` + `<rect x="12.4" y="11.6" width="6.2" height="4.6" fill="currentColor" stroke="none"/>`,
);

export const pipExitIcon = svg(
  `<rect x="3" y="5" width="18" height="14"/>` + `<rect x="5.4" y="7.4" width="6.2" height="4.6"/>`,
);

export const airplayEnterIcon = svg(
  `<rect x="3" y="4.4" width="18" height="12.6"/>` + `<path d="M12 13.6l4.6 6.2H7.4z" fill="currentColor" stroke="none"/>`,
);

export const airplayExitIcon = filled(
  `<path fill-rule="evenodd" d="M3 4.4h18V17H3zM12 8.2l3.4 5H8.6z"/>`,
);

const castFrame = `<path d="M3.6 4.6h16.8v14.8H9"/>`;
const castWaves =
  `<path d="M4.8 12.6a6.4 6.4 0 0 1 6.4 6.4"/><path d="M4.8 16a3 3 0 0 1 3 3"/>` +
  `<circle cx="5" cy="18.8" r="1.05" fill="currentColor" stroke="none"/>`;

export const castEnterIcon = svg(castFrame + castWaves);

export const castExitIcon = svg(
  `<rect x="3.6" y="4.6" width="16.8" height="14.8"/>` + `<rect x="6.4" y="7.4" width="6" height="4.6" fill="currentColor" stroke="none"/>`,
);

/** Speech bubble with two audio bars (audio tracks menu). */
export const speechIcon = svg(
  `<rect x="3.4" y="4.8" width="17.2" height="11.4"/>` +
    `<path d="M8 16.2l-1.4 3.8 5-3.8"/>` +
    `<path d="M9.4 8.4v4.4M13.4 7.2v6.8"/>`,
);

/** Open gauge arc with a needle (playback speed menu). */
export const speedIcon = svg(
  `<path d="M4.6 16.8a8.6 8.6 0 1 1 14.8 0"/>` + `<path d="M12 12l4.6-4.6"/>` +
    `<circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>`,
);

/** Two hairline slider tracks with ring knobs (quality menu). */
export const switchesIcon = svg(
  `<path d="M3.8 8.2h16.4M3.8 15.8h16.4"/>` +
    `<circle cx="9" cy="8.2" r="2.1"/><circle cx="15" cy="15.8" r="2.1"/>`,
);

/**
 * Buffering: a hairline arc that rotates. The animation runs through
 * `--media-spinner-animation`, so the theme's reduced-motion preferences
 * (which set that variable to `none`) stop it.
 */
export const spinnerIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">` +
  `<style>@keyframes cinema-noir-spin{to{transform:rotate(360deg)}}g{transform-box:fill-box;transform-origin:center;animation:var(--media-spinner-animation, cinema-noir-spin .9s linear infinite)}</style>` +
  `<g><path d="M20.4 12a8.4 8.4 0 1 1-2.5-6"/></g></svg>`;

/** Every Cinema Noir glyph, keyed by the Scaffold icon names the skin markup uses. */
export const noirIcons: Record<string, string> = {
  'airplay-enter': airplayEnterIcon,
  'airplay-exit': airplayExitIcon,
  'captions-off': captionsOffIcon,
  'captions-on': captionsOnIcon,
  'cast-enter': castEnterIcon,
  'cast-exit': castExitIcon,
  check: checkIcon,
  chevron: chevronIcon,
  'fullscreen-enter': fullscreenEnterIcon,
  'fullscreen-exit': fullscreenExitIcon,
  gear: gearIcon,
  pause: pauseIcon,
  'pip-enter': pipEnterIcon,
  'pip-exit': pipExitIcon,
  play: playIcon,
  restart: restartIcon,
  seek: seekIcon,
  speech: speechIcon,
  speed: speedIcon,
  spinner: spinnerIcon,
  switches: switchesIcon,
  'volume-high': volumeHighIcon,
  'volume-low': volumeLowIcon,
  'volume-off': volumeOffIcon,
};
