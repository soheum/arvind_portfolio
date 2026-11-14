// Key colour for each image, shown as a solid block before the image fades in.
// Keyed by file name without the extension or "-mb" suffix (e.g. "hilo-01").
// Picked from the product in each render (most common non-background colour),
// then shifted so every image has a clearly different hover colour.
// Images not listed here fall back to DEFAULT_IMAGE_COLOR.
export const DEFAULT_IMAGE_COLOR = '#2a2a2a';

export const imageColors = {
  // Collier
  '01-01': '#143428',
  '01-02': '#213d33',
  '01-03': '#0b231c',
  '01-04': '#2b4a40',
  '01-05': '#3b544b',
  '01-06': '#011a0b',
  '01-07': '#b4b1ad',
  // Genesis
  '02-01': '#bcbdbf',
  '02-02': '#2f2f2f',
  '02-03': '#a6a6a5',
  '02-04': '#c8b689',
  // Starlight
  '03-01': '#d6c8ac',
  '03-02': '#9c9c98',
  '03-03': '#e1d3b6',
  '03-04': '#c9bb9f',
  // GLO
  '04-01': '#c8c8c8',
  '04-02': '#d3d3d3',
  '04-03': '#a5b1bd',
  '04-04': '#8b8b8b',
  // Hyper
  'hyper-blue-pink': '#043a78',
  'hyper-ring': '#11536b',
  'hyper-dials': '#aa2a2c',
  // Hilo
  'hilo-01': '#dfdfdf',
  'hilo-02': '#95a1ad',
  'hilo-03': '#7e7e7e',
  'hilo-04': '#ededed',
  'hilo-05': '#8995a1',
  // Uncropped photos: hover shades near the grey they sit on
  'hilo-colours': '#fafaf4',
  'hilo-blue-pens': '#eee9d8',
  // Infuse
  'infuse-front': '#c2ced9',
  'infuse-closeup': '#737373',
  // Orbit-Axiom (charcoal drone, controller and case)
  'orbit-01': '#3a3b3e',
  'orbit-03': '#111214',
  'orbit-04': '#4d4d4e',
  'orbit-05': '#1f2b38',
  'orbit-07': '#56575a',
  'orbit-08': '#646567',
  'orbit-09': '#3f3829',
  'orbit-video': '#9ab5aa',
};

// "/assets/hilo-01-mb.jpg" -> key colour for "hilo-01"
export const colorFor = (src = '') => {
  const name = src.split('/').pop().replace(/\.[a-z0-9]+$/i, '').replace(/-mb$/, '');
  return imageColors[name] || DEFAULT_IMAGE_COLOR;
};
