import React, { useState, useEffect, useMemo, useRef } from 'react';
import '../index.css';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { colorFor } from '../data/imageColors';
import { cv } from '../data/cv';

const projectData = [
    {
      title: "Hyper",
      headline: "Building a Challenger from the Ground Up",
      category: "Inhalation Product",
      type: "Commercial",
      year: "2025",
      description: "Hyper Pro is a compact heated tobacco device crafted from lightweight aluminium. Its TasteSelect dial makes it easy to customise flavour, with Boost Mode for extra intensity. The EasyView display shows battery life, pre-heating status and session progress at a glance, and a quick press reveals the remaining charge.\n\nHyper was the product that would define the Glo range, and the first designed truly in-house. As the challenger in the category, there was a lot riding on it.\n\nWith a small team, we owned everything from ID and CMF to much of the UX, building our process, standards and design language as we went, and forging new ways of working with marketing, product engineering and research. The result was a first-in-class display and a clearer, more intuitive experience.",
      imageUrl: "/assets/04-02.webp", imageUrlWeb: "/assets/04-02.webp", imageUrlmb: "/assets/04-02-mb.jpg",
      imageUrl2: "/assets/04-03.webp", imageUrl2Web: "/assets/04-03.webp", imageUrl2mb: "/assets/04-03-mb.jpg",
      imageUrl3: "/assets/04-04.webp", imageUrl3Web: "/assets/04-04.webp", imageUrl3mb: "/assets/04-04-mb.jpg",
      imageUrl4: "/assets/04-01.webp", imageUrl4Web: "/assets/04-01.webp", imageUrl4mb: "/assets/04-01-mb.jpg",
      imageUrl5: "/assets/hyper-blue-pink.jpg", imageUrl5Web: "/assets/hyper-blue-pink.jpg", imageUrl5mb: "/assets/hyper-blue-pink-mb.jpg",
      imageUrl6: "/assets/hyper-ring.jpg", imageUrl6Web: "/assets/hyper-ring.jpg", imageUrl6mb: "/assets/hyper-ring-mb.jpg",
      imageUrl7: "/assets/hyper-dials.jpg", imageUrl7Web: "/assets/hyper-dials.jpg", imageUrl7mb: "/assets/hyper-dials-mb.jpg",
    },
    {
      title: "Hilo",
      headline: "Raising the Bar on Quality and Craft",
      category: "Inhalation Product",
      type: "Commercial",
      year: "2025",
      description: "Hilo is the flagship of the Glo range, offered in two formats: a compact one-piece device (Hilo) and a two-piece pen with charging case (Hilo Plus). Its heating technology delivers a first-in-class five-second ramp-up, while an AMOLED display keeps it effortless to use.\n\nBuilt around a new, smaller consumable, Hilo was our chance as the challenger brand to showcase quality and craftsmanship. Its UI matured into a richer digital experience, and the range became a vehicle for premium colour and material expression.\n\nTechnically, it was one of the most rewarding projects. We pushed engineering to fit a new heating system, display and battery into a compact form factor, getting deep into the hardware to both challenge and support the team. Several cost-down exercises then refined the internal build, keeping it premium while delivering better value for the business.",
      imageUrl: "/assets/hilo-01.jpg", imageUrlWeb: "/assets/hilo-01.jpg", imageUrlmb: "/assets/hilo-01-mb.jpg",
      imageUrl2: "/assets/hilo-02.jpg", imageUrl2Web: "/assets/hilo-02.jpg", imageUrl2mb: "/assets/hilo-02-mb.jpg",
      imageUrl3: "/assets/hilo-03.jpg", imageUrl3Web: "/assets/hilo-03.jpg", imageUrl3mb: "/assets/hilo-03-mb.jpg",
      imageUrl4: "/assets/hilo-04.jpg", imageUrl4Web: "/assets/hilo-04.jpg", imageUrl4mb: "/assets/hilo-04-mb.jpg",
      imageUrl5: "/assets/hilo-05.jpg", imageUrl5Web: "/assets/hilo-05.jpg", imageUrl5mb: "/assets/hilo-05-mb.jpg",
      imageUrl6: "/assets/hilo-colours.jpg", imageUrl6Web: "/assets/hilo-colours.jpg", imageUrl6mb: "/assets/hilo-colours-mb.jpg", imageUrl6NoCrop: true,
      imageUrl7: "/assets/hilo-blue-pens.jpg", imageUrl7Web: "/assets/hilo-blue-pens.jpg", imageUrl7mb: "/assets/hilo-blue-pens-mb.jpg", imageUrl7NoCrop: true,
    },
    {
      title: "Infuse",
      headline: "Making Something New Feel Instantly Familiar",
      category: "Inhalation Product",
      type: "Commercial",
      year: "2025",
      description: "Infuse opens a new category for Glo, pairing tobacco extract with an infusion system in place of combustion. Its pen-like format, soft mouthpiece and session control reimagine the smoking ritual.\n\nInfuse was the hybrid of the range: technically a vapour product within a brand built on heated tobacco, with a consumable specially designed to recreate an authentic tobacco taste. It had to carry the qualities of its Glo siblings, while having an identity strong enough to stand on its own.\n\nIt was also the first time we developed the device and consumable pod together, which meant defining the platform architecture and a roadmap for future generations, with room for the brand to evolve. On the experience side, we brought the premium range’s session control to Infuse, within the constraints of its platform.",
      imageUrl: "/assets/infuse-front.jpg", imageUrlWeb: "/assets/infuse-front.jpg", imageUrlmb: "/assets/infuse-front-mb.jpg",
      imageUrl2: "/assets/infuse-closeup.jpg", imageUrl2Web: "/assets/infuse-closeup.jpg", imageUrl2mb: "/assets/infuse-closeup-mb.jpg",
    },
    {
        title: "Collier",
        category: "Accessories",
        type: "Personal",
        year: "2025",
        description: "A personalised leather dog collar. Its titanium buckle, cushioning suede patch and steel hook are subtle details that capture the character of our four-legged friends.",
        imageUrl: "/assets/01-01.jpg",
        imageUrlWeb: "/assets/01-01.webp",
        imageUrlmb: "/assets/01-01-mb.jpg",
        imageUrl2: "/assets/01-02.jpg",
        imageUrl2Web: "/assets/01-02.webp",
        imageUrl2mb: "/assets/01-02-mb.jpg",        
        imageUrl3: "/assets/01-03.jpg",
        imageUrl3Web: "/assets/01-03.webp",
        imageUrl3mb: "/assets/01-03-mb.jpg",
        imageUrl4: "/assets/01-04.jpg",
        imageUrl4Web: "/assets/01-04.webp",
        imageUrl4mb: "/assets/01-04-mb.jpg",
        imageUrl5: "/assets/01-05.jpg",
        imageUrl5Web: "/assets/01-05.webp",
        imageUrl5mb: "/assets/01-05-mb.jpg",
        imageUrl6: "/assets/01-06.jpg",
        imageUrl6Web: "/assets/01-06.webp",
        imageUrl7: "/assets/01-07.jpg",
        imageUrl7Web: "/assets/01-07.webp",
        imageUrl7mb: "/assets/01-07-mb.jpg",
    },
    {
      title: "Starlight",
      category: "Accessories",
      type: "Personal",
      year: "2024",
      description: "A gold-dipped sterling silver bracelet. Its fluid, gentle forms express a harmony of contrasts, symbolising unity and balance.",
      imageUrl: "/assets/03-01.jpg",
      imageUrlWeb: "/assets/03-01.webp",
      imageUrlmb: "/assets/03-01-mb.jpg",
      imageUrl2: "/assets/03-03.jpg",
      imageUrl2Web: "/assets/03-03.webp",
      imageUrl2mb: "/assets/03-03-mb.jpg",
      imageUrl3: "/assets/03-02.jpg",
      imageUrl3Web: "/assets/03-02.webp",
      imageUrl3mb: "/assets/03-02-mb.jpg",
      imageUrl4: "/assets/03-04.jpg",
      imageUrl4Web: "/assets/03-04.webp",
      imageUrl4mb: "/assets/03-04-mb.jpg",
  },
    {
      title: "Genesis",
      category: "Accessories",
      type: "Personal",
      year: "2024",
      description: "A sterling silver badge capturing the tension between two volumes as they come together or pull apart, with a D-pin fastening at the back. It is hallmarked with traditional symbols for the maker, precious metal, place of origin and year.",
      imageUrl: "/assets/02-01.jpg",
      imageUrlWeb: "/assets/02-01.webp",
      imageUrlmb: "/assets/02-01-mb.jpg",
      imageUrl2: "/assets/02-02.jpg",
      imageUrl2Web: "/assets/02-02.webp",
      imageUrl2mb: "/assets/02-02-mb.jpg",
      imageUrl3: "/assets/02-03.jpg",
      imageUrl3Web: "/assets/02-03.webp",
      imageUrl3mb: "/assets/02-03-mb.jpg",
      // imageUrl4: "/assets/02-04.jpg",
      // imageUrl4Web: "/assets/02-04.webp",
      // imageUrl4mb: "/assets/02-04-mb.jpg",

  },
    {
      title: "Orbit-Axiom",
      category: "Product",
      type: "Concept",
      year: "2020",
      description: "Orbit-Axiom is a professional 3D imaging drone concept, created with Ericsson at Umeå Institute of Design. Its dual-axis cameras scan construction and industrial sites and recreate them as 3D models, so teams can review a space together and solve problems in real time. The system pairs the drone with a phone-mounted controller and a fitted carry case.",
      imageUrl: "/assets/orbit-01.webp", imageUrlWeb: "/assets/orbit-01.webp", imageUrlmb: "/assets/orbit-01-mb.jpg",
      imageUrl2: "/assets/orbit-03.webp", imageUrl2Web: "/assets/orbit-03.webp", imageUrl2mb: "/assets/orbit-03-mb.jpg",
      imageUrl3: "/assets/orbit-04.webp", imageUrl3Web: "/assets/orbit-04.webp", imageUrl3mb: "/assets/orbit-04-mb.jpg",
      imageUrl4: "/assets/orbit-05.webp", imageUrl4Web: "/assets/orbit-05.webp", imageUrl4mb: "/assets/orbit-05-mb.jpg",
      imageUrl5: "/assets/orbit-07.webp", imageUrl5Web: "/assets/orbit-07.webp", imageUrl5mb: "/assets/orbit-07-mb.jpg",
      imageUrl6: "/assets/orbit-08.webp", imageUrl6Web: "/assets/orbit-08.webp", imageUrl6mb: "/assets/orbit-08-mb.jpg",
      imageUrl7: "/assets/orbit-09.webp", imageUrl7Web: "/assets/orbit-09.webp", imageUrl7mb: "/assets/orbit-09-mb.jpg",
      // Shown as the last tile, playing silently on loop
      video: "/assets/orbit-video.mp4",
    },
];

// Project description, with optional linked words (descriptionLinks) that
// change to their own colour on hover
const DescriptionLink = ({ link }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="cursor-pointer transition-colors duration-200"
      style={{ color: hover ? link.hoverColor : undefined }}
    >
      {link.text}
    </a>
  );
};

// Glo brand intro: shown before the description of whichever BAT project
// (Hyper, Hilo or Infuse) the visitor opens first, and not on the others after that
const BAT_PROJECTS = ['Hyper', 'Hilo', 'Infuse'];
const GLO_INTRO = 'Glo is BAT’s brand of tobacco heating products, designed to help adult smokers switch completely from cigarettes to a potentially reduced-risk alternative.';
const GLO_LINK = { text: 'Glo', url: 'https://www.myglo.com/en-gr/collections/glo-heated-tobacco-devices', hoverColor: '#F96714' }; // Pantone Orange Tiger

// Blank lines ("\n\n") in a description start a new paragraph
const renderDescription = (item, withGloIntro = false) => (withGloIntro ? GLO_INTRO + '\n\n' : '')
  .concat(item.description).split('\n\n').map((para, i) => {
  let parts = [para];
  [...(item.descriptionLinks || []), ...(withGloIntro ? [GLO_LINK] : [])].forEach(link => {
    parts = parts.flatMap(part => {
      if (typeof part !== 'string') return [part];
      const at = part.indexOf(link.text);
      if (at === -1) return [part];
      return [part.slice(0, at), <DescriptionLink key={link.text} link={link} />, part.slice(at + link.text.length)];
    });
  });
  return <span key={i} className={`block ${i > 0 ? 'mt-3' : ''}`}>{parts}</span>;
});

// Open-project type hierarchy (project title itself sits in the list row above):
//   1. Section label  "Overview"  11px caps, tracked, mid grey
//   2. Headline       one-liner   20px white, tight leading
//   3. Body           paragraphs  15px light grey, 1.6 leading (set on the wrapper)
const renderDescriptionBlock = (item, withGloIntro = false) => (
  <>
    {item.description && (
      <span className="block font-questrial text-[11px] leading-none uppercase tracking-[0.14em] text-[var(--fg-muted)]">
        {item.heading || 'Overview'}
      </span>
    )}
    {item.headline && (
      <span className="block mt-2 font-questrial text-[20px] leading-[1.25] text-[var(--fg)]">{item.headline}</span>
    )}
    <span className={`block ${item.headline ? 'mt-3' : 'mt-2'}`}>{renderDescription(item, withGloIntro)}</span>
    {(item.sections || []).map(sec => (
      <React.Fragment key={sec.label}>
        <span className="block mt-8 font-questrial text-[11px] leading-none uppercase tracking-[0.14em] text-[var(--fg-muted)]">{sec.label}</span>
        {sec.headline && (
          <span className="block mt-2 font-questrial text-[20px] leading-[1.25] text-[var(--fg)]">{sec.headline}</span>
        )}
        <span className={`block ${sec.headline ? 'mt-3' : 'mt-2'}`}>{renderDescription({ description: sec.body })}</span>
      </React.Fragment>
    ))}
  </>
);

const headerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
};
const imageListAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      delay: 0.25
    }
  }
};
const loadAnimation = {
  hidden: { opacity: 0,  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      delay: 0.5
    }
  }
};

// Image tile that loads in two steps: first a solid block in the image's key
// colour fades in, then the image itself fades in over it. Each tile gets a small
// random delay so the grid fills in tile by tile rather than all at once.
const ImageWithSkeleton  = ({ src, alt, width, height, onClick, className, wrapperClassName = '', imageBg, loading, playButton = false }) => {
  const [loaded, setLoaded] = useState(false);
  const [blockShown, setBlockShown] = useState(false);
  // Hovering a tile fades the image out to its solid key-colour block
  const [hovered, setHovered] = useState(false);
  // Random but fixed for this tile: when its colour block appears, and how long
  // the block holds before the image is revealed
  const [timing] = useState(() => ({
    block: Math.random() * 0.5,
    hold: 0.25 + Math.random() * 0.45,
  }));
  const color = colorFor(src);
  const ratio = width && height ? `${width}/${height}` : undefined;
  const revealed = loaded && blockShown;
  const hasRevealed = useRef(false);

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Solid key-colour block */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: timing.block }}
        onAnimationComplete={() => setBlockShown(true)}
      />
      {/* Image, revealed once it has loaded and the block has held for a moment.
          imageBg gives the image its own backdrop (fades with it), used by the
          uncropped photos so their multiply blend always lands on the renders' grey. */}
      <motion.div
        className="relative"
        style={{ backgroundColor: imageBg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed && !hovered ? 1 : 0 }}
        // First reveal waits for the block to hold; hover in/out is immediate
        transition={revealed && !hovered && !hasRevealed.current
          ? { duration: 0.4, ease: 'easeOut', delay: timing.hold }
          : { duration: 0.3, ease: 'easeOut' }}
        onAnimationComplete={() => { if (revealed) hasRevealed.current = true; }}
      >
        {/\.(mp4|webm|mov)$/i.test(src) ? (
          // Video tile: plays silently on loop, like a moving image
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`block ${className}`}
            style={{ width: '100%', height: 'auto', aspectRatio: ratio }}
            onLoadedData={() => setLoaded(true)}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            className={`block ${className}`}
            style={{ width: '100%', height: 'auto', aspectRatio: ratio }}
            onLoad={() => setLoaded(true)}
          />
        )}
      </motion.div>
      {/* Play button (video tiles): stays visible above the preview and on hover */}
      {playButton && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center"
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Play size={22} className="text-black ml-0.5" fill="currentColor" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// Full-screen player: opens the video large in its landscape (16:9) ratio and
// plays it with sound and controls. Esc, the X or clicking outside closes it.
const VideoModal = ({ src, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gray-300 transition-colors"
        aria-label="Close video"
      >
        <X size={24} />
      </button>
      <motion.div
        className="w-full max-w-6xl aspect-video bg-black"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <video src={src} className="w-full h-full object-contain" autoPlay controls playsInline />
      </motion.div>
    </motion.div>
  );
};
const ImageModal = ({ image, images, onClose }) => {
  if (!image) return null;
  // Find initial image index
  const initialIndex = images.findIndex(img => img.src === image.src);
  // Create state for handling arrow keys
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  // Navigation functions - use currentImageIndex instead of currentIndex
  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);  // Changed from currentIndex
    }
  };
  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);  // Changed from currentIndex
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [currentImageIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-20 right-20 text-white hover:text-gray-300 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Left Arrow - use currentImageIndex */}
      {currentImageIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors w-48 h-1/2 flex items-center justify-center"
        >
          <ArrowLeft size={32} />
        </button>
      )}

      {/* Right Arrow - use currentImageIndex */}
      {currentImageIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors w-48 h-1/2 flex items-center justify-center"
        >
          <ArrowRight size={32} />
        </button>
      )}

      <div className="max-w-2xl w-full max-h-[90vh] relative">
        <picture>
          <source srcSet={images[currentImageIndex].webp || images[currentImageIndex].src} type="image/webp" />
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].title}
            className="w-full h-full object-contain"
          />
        </picture>
      </div>
    </div>
  );
};

// Collect imageUrl, imageUrl2 ... imageUrl16 from a project or sub-tab.
// Set imageUrlNNoCrop: true to show that image whole instead of cropped.
const getImages = (source) => Array.from({ length: 16 }, (_, i) => {
  const n = i === 0 ? '' : i + 1;
  return {
    src: source[`imageUrl${n}`],
    webp: source[`imageUrl${n}Web`],
    mobile: source[`imageUrl${n}mb`] || source[`imageUrl${n}Web`] || source[`imageUrl${n}`], // phone-size file, else the lighter web one
    noCrop: source[`imageUrl${n}NoCrop`],
  };
}).filter(img => img.webp);

// Project/sub-tab images plus its video (source.video) as the last tile
const getTiles = (source) => source.video
  ? [...getImages(source), { src: source.video, webp: source.video, video: true }]
  : getImages(source);

// How many grey GLO renders (from Hyper, Hilo, Infuse) appear in the landing page grid
const GLO_LANDING_COUNT = 3;
const GREY_RENDER_PROJECTS = ['Hyper', 'Hilo', 'Infuse'];

// Most images a project may show in the landing page grid (others: no limit)
const LANDING_LIMITS = { 'Orbit-Axiom': 1 };
// Projects that may only use these images in the landing page grid
const LANDING_ONLY = { 'Orbit-Axiom': ['orbit-03', 'orbit-04'] };

// Fisher-Yates shuffle (returns a new array)
const shuffle = (list) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ImageGrid= ({ items, selectedIndex, selectedSub = null, showAllImages, onOpenProject = () => {}, onSelectSub = () => {} }) => {
  const [modalImage, setModalImage] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);
  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const randomImages = useMemo(() => {
    const images = [...items]
    .filter(item => !GREY_RENDER_PROJECTS.includes(item.title))
    // Projects listed in LANDING_LIMITS show at most that many (random) images
    .flatMap(item => shuffle(getImages(item)
        .filter(img => !LANDING_ONLY[item.title] || LANDING_ONLY[item.title].some(name => img.webp.includes(name))))
      .slice(0, LANDING_LIMITS[item.title] ?? Infinity)
      .map(img => ({ ...img, title: item.title })));

    // Mix in a few grey studio renders from Hyper, Hilo and Infuse (Hyper's silver
    // renders only; its colour shots and Hilo's uncropped photos are left out)
    const greyRenders = items
      .filter(item => GREY_RENDER_PROJECTS.includes(item.title))
      .flatMap(item => getImages(item)
        .filter(img => !img.noCrop && (item.title !== 'Hyper' || img.webp.includes('/04-')))
        .map(img => ({ ...img, title: item.title })));

    // No repeats: each image appears at most once. If there aren't enough other
    // project images to fill 16 tiles, more GLO renders fill the gap.
    const unique = (list) => list.filter((img, i) => list.findIndex(o => o.webp === img.webp) === i);
    const others = shuffle(unique(images));
    const grey = shuffle(unique(greyRenders));
    const gloCount = Math.min(grey.length, Math.max(GLO_LANDING_COUNT, 16 - others.length));
    const picked = [...others.slice(0, 16 - gloCount), ...grey.slice(0, gloCount)];
    return shuffle(picked);
  }, [items]);

  // All sub-tab images in a new random order each time a project (e.g. GLO) is opened.
  // Kept stable while it stays open, so hovering or filtering doesn't reshuffle.
  const shuffledSubImages = useMemo(() => {
    const subs = selectedIndex !== null ? items[selectedIndex].subProjects : null;
    return subs ? shuffle(subs.flatMap((sub, subIndex) => getImages(sub).map(img => ({ ...img, subIndex })))) : [];
  }, [items, selectedIndex]);

  if (showAllImages) {
    return (
      // Showing all images in mobile 
      <>
      <motion.div className="md:hidden flex flex-col space-y-1 pb-2"> 
        {randomImages.map((image, index) => (
          <ImageWithSkeleton
            key={image.webp}
            src={image.mobile || image.src}
            alt={image.title}
            width={1}
            height={1}
            className="w-full object-cover cursor-pointer"
            onClick={() => onOpenProject(image.title, image.sub)}
          />
        ))}
      </motion.div>
      </>
    );
  }

  if (selectedIndex !== null) {
    // Project with sub-tabs (GLO): no tab picked shows every sub-tab's images in
    // random order; picking a tab filters to that tab's images in their set order.
    const project = items[selectedIndex];
    const subs = project.subProjects;
    let selectedImages;
    if (subs && selectedSub !== null && subs[selectedSub].imageUrlWeb) {
      selectedImages = getTiles(subs[selectedSub]);
    } else if (subs) {
      selectedImages = shuffledSubImages;
    } else {
      selectedImages = getTiles(project);
    }

    // In the all-tabs view (GLO with no tab picked) an image opens its tab;
    // inside a tab, or a project without tabs, it opens the enlarged view.
    const openImage = (image) => {
      if (image.video) { setOpenVideo(image.src); return; }
      if (image.subIndex !== undefined && selectedSub === null) onSelectSub(image.subIndex);
      else handleImageClick(image);
    };

    return(
      <>
      {/* Desktop  The variant below affects the filtered images */}
      <motion.div className="hidden md:grid grid-cols-4 grid-rows-4 gap-1" variants={imageListAnimation}>
      {selectedImages.map((image, index) => (
        <ImageWithSkeleton
          // Key includes the tab so every tab switch rebuilds the tiles and replays the reveal
          key={`${selectedSub ?? 'all'}-${image.webp}`}
          src={image.webp}
          alt={items[selectedIndex].title}
          loading="lazy"
          width={4}
          height={5}
          // Uncropped images sit on the renders' grey; multiply turns their white background grey
          imageBg={image.noCrop ? '#E2E2DC' : undefined}
          className={`w-full h-full hover:cursor-pointer ${image.noCrop ? 'object-contain mix-blend-multiply' : 'object-cover'}`}
          playButton={image.video}
          onClick={() => openImage(image)}
            />
          ))}
      </motion.div>
      {/* Mobile */}
      <div className="md:hidden mb-8 flex flex-col space-y-1" variants={imageListAnimation}>
      {selectedImages.map((image, index) => (
        <ImageWithSkeleton
          key={`${selectedSub ?? 'all'}-${image.webp}`}
          src={image.video ? image.src : (image.mobile || image.src)}
          alt={items[selectedIndex].title}
          loading="lazy"
          imageBg={image.noCrop ? '#E2E2DC' : undefined}
          className={`w-full h-full object-cover cursor-pointer ${image.noCrop ? 'mix-blend-multiply' : ''}`}
          playButton={image.video}
          onClick={() => openImage(image)}
        />
      ))}
      </div>
      <ImageModal image={modalImage} images={selectedImages.filter(img => !img.video)} onClose={() => setModalImage(null)} />
      <AnimatePresence>
        {openVideo && <VideoModal key="video" src={openVideo} onClose={() => setOpenVideo(null)} />}
      </AnimatePresence>
      </>
    );
  }
  return (
    <>
    {/* Desktop view  variant here controls the list and image grid but not the footer*/}
    <motion.div className="hidden md:grid grid-cols-4 gap-1 hide_scroll auto-rows-min">
      {randomImages.map((image, index) => (
        <ImageWithSkeleton 
        key={image.webp}
        src={image.webp}
        alt={image.title}
        loading="lazy"
        width={4}
        height={5}
        className="w-full h-full object-cover cursor-pointer"
        onClick={() => onOpenProject(image.title, image.sub)} />
      ))}
    </motion.div>
    {/* Mobile view */}
    <div className="md:hidden flex flex-col space-y-2 pb-16">
      {randomImages.map((image, index) => (
        <ImageWithSkeleton key={image.webp} src={image.mobile} alt={image.title}
        loading="lazy"
        width={4}
        height={5}
        className="w-full object-cover cursor-pointer"
        onClick={() => onOpenProject(image.title, image.sub)} />
      ))}
    </div>
    <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};
// Theme switch: a word next to CV naming the background it switches to
// ("Light" on the dark site, "Dark" on the white site).
const currentTheme = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

const toggleTheme = () => {
  const root = document.documentElement;
  const next = currentTheme() === 'light' ? 'dark' : 'light';
  if (next === 'light') root.dataset.theme = 'light';
  else delete root.dataset.theme;
  try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  window.dispatchEvent(new Event('themechange'));
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    window.addEventListener('themechange', sync);
    return () => window.removeEventListener('themechange', sync);
  }, []);
  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} background`}
      className="font-questrial text-base cursor-pointer"
      initial={{ color: "var(--fg-link)" }}
      whileHover={{ color: "var(--fg)" }}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </motion.button>
  );
};

// CV pop-up: the CV as real text on the page (content in src/data/cv.js), with a
// button to download the PDF. Esc, the X or clicking outside closes it.
const CV_URL = '/assets/Arvind-Sushil-CV.pdf';
const CVModal = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[var(--overlay)] flex items-center justify-center p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-4xl h-full max-h-[90vh] flex flex-col bg-[var(--bg)] border border-[var(--border)]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 md:px-10 pt-5 pb-3 font-questrial text-base">
          <a href={CV_URL} download="Arvind-Sushil-CV.pdf" className="text-[var(--fg-body)] hover:text-[var(--fg)] transition-colors">
            Download PDF
          </a>
          <button onClick={onClose} className="text-[var(--fg)] hover:text-[var(--fg-muted)] transition-colors" aria-label="Close CV">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto hide_scroll px-6 md:px-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.75fr] gap-10 md:gap-14 pt-4">
            {/* Left: name, summary, links */}
            <div>
              <h2 className="font-questrial text-[var(--fg)] text-2xl">{cv.name}</h2>
              <div className="mt-6 space-y-3 font-geist font-light text-sm leading-relaxed text-[var(--fg-cv-body)]">
                {cv.summary.map((line) => <p key={line}>{line}</p>)}
              </div>
              <div className="mt-6 space-y-1 font-geist font-light text-sm">
                {cv.links.map((link) => (
                  <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer" className="block text-[var(--fg)] hover:text-[var(--fg-body)] transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: experience and education */}
            <div>
              <h3 className="font-questrial text-[var(--fg)] text-2xl">Experience</h3>
              <div className="mt-6 space-y-8">
                {cv.experience.map((job) => (
                  <div key={job.role + job.meta}>
                    <h4 className="font-questrial text-[var(--fg)] text-lg">{job.role}</h4>
                    <p className="mt-1 font-geist text-sm text-[var(--fg)]">{job.meta}</p>
                    <p className="mt-1 font-geist font-light text-sm leading-relaxed text-[var(--fg-cv-sub)]">{job.summary}</p>
                    <ul className="mt-3 space-y-1 font-geist font-light text-sm leading-relaxed text-[var(--fg-cv-body)] list-disc pl-4 marker:text-[var(--marker)]">
                      {job.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="mt-12 font-questrial text-[var(--fg)] text-2xl">Education</h3>
              <div className="mt-6 space-y-5">
                {cv.education.map((ed) => (
                  <div key={ed.school}>
                    <h4 className="font-questrial text-[var(--fg)] text-lg">{ed.school}</h4>
                    <p className="mt-1 font-geist font-light text-sm text-[var(--fg-cv-sub)]">{ed.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Intro shown above the project list: open on first load, collapses up when a
// project opens, and clicking the name drops it down again. It opens inside the
// list column, so only the text below it moves; the image grid stays put.
const Intro = ({ open }) => (
  <AnimatePresence initial={false}>
    {open && (
      <motion.div
        key="intro"
        className="overflow-hidden"
        // Height eases in and out evenly; the text fades in just after the
        // space starts opening, and fades out quickly before it closes
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: 'auto',
          opacity: 1,
          transition: {
            height: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.4, delay: 0.2, ease: 'easeOut' },
          },
        }}
        exit={{
          height: 0,
          opacity: 0,
          transition: {
            height: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.2, ease: 'easeIn' },
          },
        }}
      >
        <div className="pb-8 space-y-1.5 font-geist font-extralight text-base leading-snug text-[var(--fg-intro)]">
          <p>
            Senior Design Lead at{' '}
            {/* BAT light blue on hover */}
            <DescriptionLink link={{ text: 'British American Tobacco', url: 'https://www.bat.com/', hoverColor: '#00B1EB' }} />, developing the next category of reduced-risk products.
          </p>
          <p>I shape product portfolios and bring category-defining ideas to market, challenging convention to give brands a clear identity that connects with people.</p>
          <p>My work is considerate and delightful to use, showcases build quality and craftsmanship, and above all has a timeless character.</p>
          <p>Specialties: Industrial Design, CMF, Physical UX, Platform Strategy, Design Roadmapping.</p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const CollapsibleList = ({ items = [], showIntro = false, onProjectOpen = () => {}, onProjectClose = () => {} }) => {
    const [expandedItems, setExpandedItems] = useState(new Set());
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showAllImages, setShowAllImages] = useState(false);
    const [showAlternateText, setShowAlternateText] = useState(false);
    const [selectedSub, setSelectedSub] = useState(null);
    // True until a sub-tab is picked: the tabs flash white one by one as a hint to click them
    const [subIntro, setSubIntro] = useState(true);
    // The first BAT project the visitor opens; it alone shows the Glo intro
    const [gloIntroFor, setGloIntroFor] = useState(null);
    const claimGloIntro = (title) => {
      if (BAT_PROJECTS.includes(title)) setGloIntroFor(prev => prev ?? title);
    };
    // CV pop-up (opened from the CV link next to E-mail)
    const [showCV, setShowCV] = useState(false);

    // Sub-tab row (e.g. Hyper / Hilo / Infuse under GLO) plus the selected one's description
    const renderSubTabs = (item) => {
      if (!item.subProjects) return null;
      return (
        <div className="pt-0 flex flex-col items-start space-y-1">
          {item.subProjects.map((sub, subIndex) => (
            <React.Fragment key={sub.title}>
              <motion.button
                onClick={() => {
                  setSubIntro(false);
                  setSelectedSub(prev => (prev === subIndex ? null : subIndex));
                }}
                animate={{ color: selectedSub === subIndex ? "var(--fg)" : "var(--fg-muted)" }}
                whileHover={{ color: "var(--fg)" }}
                // On open, each tab flashes white once, one after another (CSS animation in
                // index.css, so hovering or re-rendering never replays it)
                className={`font-questrial text-base ${selectedSub === null && subIntro ? 'subtab-flash' : ''}`}
                style={{ animationDelay: `${0.6 + subIndex * 0.3}s` }}
              >
                {sub.title}
              </motion.button>
              {/* Selected tab's description sits directly under that tab */}
              {selectedSub === subIndex && sub.description && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pb-2 font-questrial font-light text-[var(--fg-body)] text-base"
                >
                  {sub.description}
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      );
    };

    // Open a project from a landing-page image (and its sub-tab, e.g. GLO > Hilo)
    const openProject = (title, subTitle) => {
      const index = items.findIndex(item => item.title === title);
      if (index === -1) return;
      onProjectOpen(); // collapse the intro
      claimGloIntro(title);
      const subIndex = subTitle ? (items[index].subProjects || []).findIndex(sub => sub.title === subTitle) : -1;
      setShowAllImages(false);
      setExpandedItems(new Set([index]));
      setSelectedIndex(index);
      setSelectedSub(subIndex >= 0 ? subIndex : null);
      setSubIntro(subIndex < 0);
      setShowAlternateText(true); // mobile: show the opened project's details
    };

    // Toggle item expansion
    const toggleItem = (index) => {
      // Opening a project collapses the intro; closing it brings the intro back
      if (index !== 'all') expandedItems.has(index) ? onProjectClose() : onProjectOpen();
      if (index !== 'all' && !expandedItems.has(index)) claimGloIntro(items[index].title);
      setSelectedSub(null);
      setSubIntro(true);
      if (index === 'all') {
        if (showAllImages) {
          setShowAllImages(false);
          setSelectedIndex(null);
          setExpandedItems(new Set());
          setShowAlternateText(false);
          return;
        }
        setShowAllImages(true);
        setSelectedIndex(null);
        setExpandedItems(new Set());
        setShowAlternateText(false);
        return;
      }

      setShowAllImages(false);
      setExpandedItems(prev => {
        if (prev.has(index)) {
            setSelectedIndex(null);
            return new Set();
        } 
        return new Set([index]);
      });
      if (!expandedItems.has(index)) {
        setSelectedIndex(index);
      }
    };

    const listItems = useMemo(() => {

      const headers = ['Year', 'Project', 'Category'];
      // Year first (left), then project, category, type
      const fields = ['year', 'title', 'category'];

      return (
        <>
        {/* List and Footer in Desktop */}
      <motion.div className="flex flex-col justify-between hidden md:flex min-h-0" >
        {/* Intro + list scroll inside the column when they're taller than the screen;
            the footer below stays pinned at the bottom */}
        <div className="flex-1 min-h-0 overflow-y-auto hide_scroll">
        <Intro open={showIntro} />
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={`row-${index}`}>
              {/* Row container */}
              <div className="grid grid-cols-3 gap-2 items-baseline hyphens-auto [overflow-wrap:anywhere] lg:hyphens-none lg:[overflow-wrap:normal] lg:grid-cols-[minmax(2.5rem,0.6fr)_minmax(3.75rem,1fr)_minmax(5.5rem,1fr)] lg:whitespace-nowrap">
                {fields.map((field) => (
                  <div key={`item-${field}-${index}`}>
                    <button 
                      onClick={() => toggleItem(index)}
                      className="text-left w-full hover: text-[var(--fg)] transition-colors"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <motion.span
                        animate={{
                          color: expandedItems.size > 0
                            ? (expandedItems.has(index) || hoveredIndex === index ? "var(--fg)" : "var(--fg-muted)")
                            : (hoveredIndex !== null ? (hoveredIndex === index ? "var(--fg)" : "var(--fg-muted)")
                              : "var(--fg)"),
                        }}
                        // Year, project name and category: same size, bold; name and category may wrap when space is tight
                        className={field === 'title' || field === 'category'
                          ? "font-questrial ease-in text-lg font-bold lg:whitespace-normal"
                          : "font-questrial ease-in text-lg font-bold"}
                      >
                        {item[field]}
                      </motion.span>
                    </button>
                  </div>
                ))}
              </div>
              {/* Expandable description */}
              <AnimatePresence>
              {expandedItems.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="col-span-4 overflow-hidden"
                >
                  <div className="pt-4 pb-6">
                    {/* Hide the project description while a sub-tab (e.g. Hyper) shows its own */}
                    {!(item.subProjects && selectedSub !== null) && (
                    <span className="font-questrial font-light text-[var(--fg-body)] text-[15px] leading-[1.6]">
                      {renderDescriptionBlock(item, item.title === gloIntroFor)}
                    </span>
                    )}
                  {renderSubTabs(item)}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        </div>
        {/* Footer */}
        <div className="hidden md:block mt-8 pb-12">
          <br />
          <motion.a 
          href="https://www.linkedin.com/in/arvind-sushil-01/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-questrial text-base mr-2 cursor-pointer"
          initial={{ color: "var(--fg-link)" }}
          whileHover={{ color: "var(--fg)" }}
          >
          LinkedIn
          </motion.a>
          <motion.a 
          href="https://www.instagram.com/arvindsushil_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-questrial text-base mr-2 cursor-pointer"
          initial={{ color: "var(--fg-link)" }}
          whileHover={{ color: "var(--fg)" }}
          >
          Instagram
          </motion.a>
          <motion.a 
          href="mailto:arvindksushil@gmail.com?subject=Hello, should we have a coffee chat?"
          className="font-questrial text-base mr-2 cursor-pointer"
          initial={{ color: "var(--fg-link)" }}
          whileHover={{ color: "var(--fg)" }}
          >
          E-mail
          </motion.a>
          <motion.button
          type="button"
          onClick={() => setShowCV(true)}
          className="font-questrial text-base mr-2 cursor-pointer"
          initial={{ color: "var(--fg-link)" }}
          whileHover={{ color: "var(--fg)" }}
          >
          CV
          </motion.button>
          <ThemeToggle />
        </div>
      </motion.div>

      <div className="md:hidden"><Intro open={showIntro} /></div>
      <div className="flex justify-between md:hidden min-w-0">
        {/* Container for all content */}
        <div className="w-full">
          {showAlternateText ? (
            <div className="flex flex-row space-x-2 mb-4 w-full">
              {items.map((item, index) => (
                expandedItems.has(index) && (
                <div key={`row-${index}`}>
                  <div className="flex flex-row">
                    <button 
                    onClick={() => {
                      toggleItem(index);
                      setShowAlternateText(false);
                    }}
                    className="text-left hover: text-[var(--fg)] transition-colors mr-2">
                      <motion.span
                      animate={{
                        color: expandedItems.has(index) ? 'var(--fg)' : 'var(--fg-muted)'
                      }}
                      className="font-questrial ease-in text-lg font-bold"> {item.title} </motion.span>
                    </button>
                    <motion.div 
                    initial={{ oapcity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-questrial font-bold text-[var(--fg-muted)] ml-2 text-lg">
                      {item.category}  ·  {item.year}
                    </motion.div>
                  </div>
                  {!(item.subProjects && selectedSub !== null) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 font-questrial font-light text-[var(--fg-body)] text-[15px] leading-[1.6]">
                      {renderDescriptionBlock(item, item.title === gloIntroFor)}
                    </motion.div>
                  )}
                    {renderSubTabs(item)}
                  </div> 
                )
              ))}
            </div>
          ) : (
            <div className="flex flex-row space-x-2 mb-4 w-full overflow-x-auto hide_scroll whitespace-nowrap [&>*]:shrink-0">
              <div>
                <button onClick={() => toggleItem('all')}
                className="text-left w-full hover: text-[var(--fg)] transition-colors mr-2">
                  <motion.span
                  animate={{
                    color: showAllImages ? 'var(--fg)' :
                    (expandedItems.size > 0 ? 'var(--fg-muted)' : 'var(--fg)')
                  }} 
                  className="font-questrial ease-in text-base">All</motion.span>
                </button>
                </div>
              {items.map((item, index) => (
                <div key={`row-${index}`}>
                  <button onClick={() => {
                    toggleItem(index);
                    setShowAlternateText(prev => !prev);
                  }}
                  className="text-left w-full hover: text-[var(--fg)] transition-colors mr-2">
                    <motion.span
                    animate={{
                      color: showAllImages ? 'var(--fg-muted)' :
                      (expandedItems.size >0 
                      ? (expandedItems.has(index) ? "var(--fg)" : "var(--fg-muted)")
                    : "var(--fg)"),
                    }}
                    className="font-questrial ease-in text-base">
                      {item.title}
                    </motion.span>
                  </button>
                  </div>
              ))}
              </div>
          )}
        
        </div>
      </div>
    </>
  );
}, [items, selectedIndex, hoveredIndex, expandedItems, selectedSub, subIntro, showAllImages, showAlternateText, showIntro, gloIntroFor]);
  
    return (
      <div className="w-full h-full">
        {/* Mobile footer (shows on mobile, hides on md screens and up) */}
        <div className="md:hidden mb-8">
          <motion.a 
            href="https://www.linkedin.com/in/arvind-sushil-01/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-questrial text-base mr-2 cursor-pointer"
            initial={{ color: "var(--fg-link)" }}
            whileHover={{ color: "var(--fg)" }}
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/arvindsushil_/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-questrial text-base mr-2 cursor-pointer"
            initial={{ color: "var(--fg-link)" }}
            whileHover={{ color: "var(--fg)" }}
          >
            Instagram
          </motion.a>
          <motion.a 
            href="mailto:arvindksushil@gmail.com?subject=Hello, should we have a coffee chat?"
            className="font-questrial text-base mr-2 cursor-pointer"
            initial={{ color: "var(--fg-link)" }}
            whileHover={{ color: "var(--fg)" }}
          >
            E-mail
          </motion.a>
          <motion.button
            type="button"
            onClick={() => setShowCV(true)}
            className="font-questrial text-base mr-2 cursor-pointer"
            initial={{ color: "var(--fg-link)" }}
            whileHover={{ color: "var(--fg)" }}
          >
            CV
          </motion.button>
          <ThemeToggle />
        </div>
        <AnimatePresence>
          {showCV && <CVModal key="cv" onClose={() => setShowCV(false)} />}
        </AnimatePresence>
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 md:grid-rows-[minmax(0,1fr)] md:gap-6 h-full">
            {listItems}
          <div className="md:hidden pt-1 pb-16">
            <div>
              <ImageGrid items={items} selectedIndex={selectedIndex} selectedSub={selectedSub} showAllImages={showAllImages} onOpenProject={openProject} onSelectSub={(i) => { setSubIntro(false); setSelectedSub(i); }} />
            </div>
          </div>
          <div className="hidden md:block col-span-2 h-full hide_scroll overflow-y-auto pb-16">
            <div className="sticky overflow-y-auto ">
              <ImageGrid items={items} selectedIndex={selectedIndex} selectedSub={selectedSub} showAllImages={showAllImages} onOpenProject={openProject} onSelectSub={(i) => { setSubIntro(false); setSelectedSub(i); }} />
            </div>
          </div>
        </div>
      </div>
    );
  };

const Home = () => {
    // Intro above the project list: open on first load, collapses when a project is
    // opened, drops back down when it's closed, and clicking the name toggles it
    const [showIntro, setShowIntro] = useState(true);
    return (
            <motion.div className="container mx-auto flex flex-col px-4 md:px-6 min-h-screen md:h-screen md:overflow-hidden"
            initial="hidden" animate="visible">
                <Header onNameClick={() => setShowIntro(open => !open)} />
                <div className="mt-6 md:mt-10 flex-1 min-h-0">
                  <CollapsibleList items={projectData} showIntro={showIntro} onProjectOpen={() => setShowIntro(false)} onProjectClose={() => setShowIntro(true)} />
                </div>                 
            </motion.div>
    )
};


export default Home;