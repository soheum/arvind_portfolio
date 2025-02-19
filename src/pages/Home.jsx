import React, { useState, useEffect, useMemo } from 'react';
import '../index.css';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';
import { select } from 'framer-motion/client';

const projectData = [
    {
        title: "Collier",
        category: "Objects",
        type: "Personal",
        year: "2025",
        description: "Personalized leather dog collar. The titanium buckle, cushioning suede patch and steel hook are subtle nods that capture the essence of our four legged friend.",
        imageUrl: "/assets/01-01.jpg",
        imageUrlWeb: "/assets/01-01.webp",
        imageUrlmb: "/assets/01-01-mb.jpg",
        imageUrlsm: "/assets/01-01-sm.jpg",
        imageUrl2: "/assets/01-02.jpg",
        imageUrl2Web: "/assets/01-02.webp",
        imageUrl2sm: "/assets/01-02-sm.jpg",
        imageUrl2mb: "/assets/01-02-mb.jpg",        
        imageUrl3: "/assets/01-03.jpg",
        imageUrl3Web: "/assets/01-03.webp",
        imageUrl3mb: "/assets/01-03-mb.jpg",
        imageUrl3sm: "/assets/01-03-sm.jpg",
        imageUrl4: "/assets/01-04.jpg",
        imageUrl4Web: "/assets/01-04.webp",
        imageUrl4mb: "/assets/01-04-mb.jpg",
        imageUrl4sm: "/assets/01-04-sm.jpg",
        imageUrl5: "/assets/01-05.jpg",
        imageUrl5Web: "/assets/01-05.webp",
        imageUrl5mb: "/assets/01-05-mb.jpg",
        imageUrl5sm: "/assets/01-05-sm.jpg",
        imageUrl6: "/assets/01-06.jpg",
        imageUrl6Web: "/assets/01-06.webp",
        imageUrl6sm: "/assets/01-06-sm.jpg",
        imageUrl7: "/assets/01-07.jpg",
        imageUrl7Web: "/assets/01-07.webp",
        imageUrl7mb: "/assets/01-07-mb.jpg",
        imageUrl7sm: "/assets/01-07-sm.jpg",
    },
    {
      title: "Starlight",
      category: "Precious wares",
      type: "Personal",
      year: "2024",
      description: "Gold dipped-Sterling silver bracelet.The design embodies harmony of contrasts, symbolizing unity and balance through its fluid and gentle shapes.",
      imageUrl: "/assets/03-01.jpg",
      imageUrlWeb: "/assets/03-01.webp",
      imageUrlmb: "/assets/03-01-mb.jpg",
      imageUrlsm: "/assets/03-01-sm.jpg",
      imageUrl2: "/assets/03-02.jpg",
      imageUrl2Web: "/assets/03-02.webp",
      imageUrl2mb: "/assets/03-02-mb.jpg",
      imageUrlsm: "/assets/03-02-sm.jpg",
      imageUrl3: "/assets/03-03.jpg",
      imageUrl3Web: "/assets/03-03.webp",
      imageUrl3mb: "/assets/03-03-mb.jpg",
      imageUrlsm: "/assets/03-03-sm.jpg",
      imageUrl4: "/assets/03-04.jpg",
      imageUrl4Web: "/assets/03-04.webp",
      imageUrl4mb: "/assets/03-04-mb.jpg",
      imageUrlsm: "/assets/03-04-sm.jpg",
  },
    {
      title: "Genesis",
      category: "Precious wares",
      type: "Personal",
      year: "2024",
      description: "A sterling silver badge capturing the tension between two volumes as they unite or separate, with a fastening D-pin at the back . Hallmarked with traditional symbols denoting the maker's mark, precious metal, place of origin, and year",
      imageUrl: "/assets/02-01.jpg",
      imageUrlWeb: "/assets/02-01.webp",
      imageUrlmb: "/assets/02-01-mb.jpg",
      imageUrlsm: "/assets/02-01-sm.jpg",
      imageUrl2: "/assets/02-02.jpg",
      imageUrl2Web: "/assets/02-02.webp",
      imageUrl2mb: "/assets/02-02-mb.jpg",
      imageUrlsm: "/assets/02-02-sm.jpg",
      imageUrl3: "/assets/02-03.jpg",
      imageUrl3Web: "/assets/02-03.webp",
      imageUrl3mb: "/assets/02-03-mb.jpg",
      imageUrlsm: "/assets/02-03-sm.jpg",
      imageUrl4: "/assets/02-04.jpg",
      imageUrl4Web: "/assets/02-04.webp",
      imageUrl4mb: "/assets/02-04-mb.jpg",
      imageUrlsm: "/assets/02-04-sm.jpg",

  },
    {
      title: "GLO",
      category: "Electronics",
      type: "Commercial",
      year: "2021 -",
      description: "Developing new category of reduced risk products for GLO at British American Tobacco.",
      imageUrl: "/assets/04-01.jpg",
      imageUrlWeb: "/assets/04-01.webp",
      imageUrlmb: "/assets/04-01-mb.jpg",
      imageUrlsm: "/assets/04-01-sm.jpg",
  },
];

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

const ImageGrid= ({ items, selectedIndex, showAllImages }) => {
  const randomImages = useMemo(() => {
    const images = [...items]
    .filter(item => item.title !== "GLO")
    .flatMap(item => [
      { src: item.imageUrl, webp: item.imageUrlWeb, mobile: item.imageUrlmb, sm: item.imageUrlsm, title: item.title },
      { src: item.imageUrl2, webp: item.imageUrl2Web, mobile: item.imageUrl2mb, sm: item.imageUrl2sm, title: item.title },
      { src: item.imageUrl3, webp: item.imageUrl3Web, mobile: item.imageUrl3mb, sm: item.imageUrl3sm, title: item.title },
      { src: item.imageUrl4, webp: item.imageUrl4Web, mobile: item.imageUrl4mb, sm: item.imageUrl4sm, title: item.title },
      { src: item.imageUrl5, webp: item.imageUrl5Web, mobile: item.imageUrl5mb, sm: item.imageUrl5sm, title: item.title },
      { src: item.imageUrl6, webp: item.imageUrl6Web, mobile: item.imageUrl6mb, sm: item.imageUrl6sm, title: item.title },
    ])
    .filter(image => image.webp);
    while (images.length < 16) {
      images.push(...images.slice(0, 16 - images.length));
    }
    return images 
    .sort(() => Math.random() - 0.5)
    .slice(0, 16);
  }, [items]);

  if (showAllImages) {
    return (
      // Showing all images in mobile 
      <motion.div className="md:hidden flex flex-col space-y-1 pb-2"> 
        {randomImages.map((image, index) => (
          <picture key={index}>
            <source srcSet={image.src} type="image/webp" />
            <motion.img
              src={image.src}
              alt={image.title}
              className="w-full aspect-square object-cover"
            />
          </picture>
        ))}
      </motion.div>
    );
  }

  if (selectedIndex !== null) {
    return(
      <>
      {/* Desktop  The variant below affects the filtered images */}
      <motion.div className="hidden md:grid grid-cols-4 grid-rows-4 gap-1" variants={imageListAnimation}>
      {items[selectedIndex].imageUrlWeb && (
          <img
            src={items[selectedIndex].imageUrlWeb}
            alt={items[selectedIndex].title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
        {items[selectedIndex].imageUrl2Web && (
        <img
          src={items[selectedIndex].imageUrl2Web}
          alt={items[selectedIndex].title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
         )}
        {items[selectedIndex].imageUrl3Web && (
        <img
          src={items[selectedIndex].imageUrl3Web}
          alt={items[selectedIndex].title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}
        {items[selectedIndex].imageUrl4Web && (
        <img
          src={items[selectedIndex].imageUrl4Web}
          alt={items[selectedIndex].title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}
        {items[selectedIndex].imageUrl5Web && (
        <img
          src={items[selectedIndex].imageUrl5Web}
          alt={items[selectedIndex].title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        )}
        {items[selectedIndex].imageUrl6Web && (
        <img
          src={items[selectedIndex].imageUrl6Web}
          alt={items[selectedIndex].title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        )}
      </motion.div>
      {/* Mobile */}
      <div className="md:hidden mb-8 flex flex-col space-y-1">
          <img
            src={items[selectedIndex].imageUrlmb}
            alt={items[selectedIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        {items[selectedIndex].imageUrl2mb && (
        <img
          src={items[selectedIndex].imageUrl2mb}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
         )}
        {items[selectedIndex].imageUrl3mb && (
        <img
          src={items[selectedIndex].imageUrl3mb}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
        {items[selectedIndex].imageUrl4mb && (
        <img
          src={items[selectedIndex].imageUrl4mb}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
        {items[selectedIndex].imageUrl5mb && (
        <img
          src={items[selectedIndex].imageUrl5mb}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        )}
        {items[selectedIndex].imageUrl6mb && (
        <img
          src={items[selectedIndex].imageUrl6mb}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        )}
      </div>
      </>
    );
  }
  return (
    <>
    {/* Desktop view  variant here controls the list and image grid but not the footer*/}
    <motion.div className="hidden md:grid grid-cols-4 gap-1 hide_scroll auto-rows-min" variants={loadAnimation}>
      {randomImages.map((image, index) => (
        <img key={index} src={image.webp} alt={image.title} 
          loading="lazy"
           className="w-full h-120 object-cover" />
      ))}
    </motion.div>
    {/* Mobile view */}
    <div className="md:hidden flex flex-col space-y-2 pb-16">
      {randomImages.map((image, index) => (
          <img key={index} src={image.mobile} alt={image.title}
          loading="lazy"
           className="w-full h-120 object-cover" />
      ))}
    </div>

   
    </>
  );
};

const CollapsibleList = ({ items = [] }) => {

    const [expandedItems, setExpandedItems] = useState(new Set());
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showAllImages, setShowAllImages] = useState(false);
    const [showAlternateText, setShowAlternateText] = useState(false);
  
    // Toggle item expansion
    const toggleItem = (index) => {
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

      const headers = ['Project', 'Category', 'Type', 'Year'];
      const fields = ['title', 'category', 'type', 'year'];

      return (
        <>
        {/* List and Footer in Desktop */}
      <motion.div className="flex flex-col justify-between hidden md:flex" variants={loadAnimation}>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={`row-${index}`}>
              {/* Row container */}
              <div className="grid grid-cols-4 gap-2">
                {fields.map((field) => (
                  <div key={`item-${field}-${index}`}>
                    <button 
                      onClick={() => toggleItem(index)}
                      className="text-left w-full hover:text-white transition-colors"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <motion.span
                        animate={{
                          color: expandedItems.size > 0
                            ? (expandedItems.has(index) || hoveredIndex === index ? "#ffffff" : "#777777")
                            : (hoveredIndex !== null ? (hoveredIndex === index ? "#ffffff" : "#777777")
                              : "#ffffff"),
                        }}
                        className="font-montreal ease-in text-base"
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
                  <div className="py-2">
                    <span className="font-montreal text-white text-base">
                      {item.description}
                    </span>
                  <br />
                  {item.title === "GLO" && (
                    <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className=" text-[#777777] pt-2 font-montreal text-base hover:text-white transition-colors"
                    onClick={() => window.open('mailto:arvindksushil@gmail.com?subject=Inquiry about GLO project', '_blank')}>
                      Contact for more info
                    </motion.button>
                  )}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="hidden md:block mt-8 pb-12">
          <br />
          <motion.a 
          href="https://www.linkedin.com/in/arvind-sushil-01/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-montreal text-base mr-2 cursor-pointer"
          initial={{ color: "#606060" }}
          whileHover={{ color: "#ffffff" }}
          >
          LinkedIn
          </motion.a>
          <motion.a 
          href="https://www.instagram.com/arvindsushil_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-montreal text-base mr-2 cursor-pointer"
          initial={{ color: "#606060" }}
          whileHover={{ color: "#ffffff" }}
          >
          Instagram
          </motion.a>
          <motion.a 
          href="mailto:arvindksushil@gmail.com?subject=Hello, should we have a coffee chat?"
          className="text-montreal text-base mr-2 cursor-pointer"
          initial={{ color: "#606060" }}
          whileHover={{ color: "#ffffff" }}
          >
          E-mail
          </motion.a>
        </div>
      </motion.div>

      <div className="flex justify-between sm:hidden">
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
                    className="text-left hover:text-white transition-colors mr-2">
                      <motion.span
                      animate={{
                        color: expandedItems.has(index) ? '#ffffff' : '#777777'
                      }}
                      className="font-montreal ease-in text-base"> {item.title} </motion.span>
                    </button>
                    <motion.div 
                    initial={{ oapcity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-montreal text-[#777777] ml-2 text-base">
                      {item.category}  ·  {item.type}  ·  {item.year}
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ oapcity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 font-montreal text-white text-base">
                      {item.description}
                    </motion.div>
                    {item.title === "GLO" && (
                    <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className=" text-white pt-2 font-montreal text-base"
                    onClick={() => window.open('mailto:arvindksushil@gmail.com?subject=Inquiry about GLO project', '_blank')}>
                      Contact for more info
                    </motion.button>
                  )}
                  </div> 
                )
              ))}
            </div>
          ) : (
            <div className="flex flex-row space-x-2 mb-4 w-full">
              <div>
                <button onClick={() => toggleItem('all')}
                className="text-left w-full hover:text-white transition-colors mr-2">
                  <motion.span
                  animate={{
                    color: showAllImages ? '#ffffff' :
                    (expandedItems.size > 0 ? '#777777' : '#ffffff')
                  }} 
                  className="font-montreal ease-in text-base">All</motion.span>
                </button>
                </div>
              {items.map((item, index) => (
                <div key={`row-${index}`}>
                  <button onClick={() => {
                    toggleItem(index);
                    setShowAlternateText(prev => !prev);
                  }}
                  className="text-left w-full hover:text-white transition-colors mr-2">
                    <motion.span
                    animate={{
                      color: showAllImages ? '#777777' :
                      (expandedItems.size >0 
                      ? (expandedItems.has(index) ? "#ffffff" : "#777777")
                    : "#ffffff"),
                    }}
                    className="font-montreal ease-in text-base">
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
}, [items, selectedIndex, hoveredIndex, expandedItems]);
  
    return (
      <div className="w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)]">
        {/* Mobile footer (shows on mobile, hides on md screens and up) */}
        <div className="sm:hidden mb-8">
          <span className="text-montreal text-[#606060] text-base">
          Designer of objects
        </span> <br />
          <motion.a 
            href="https://www.linkedin.com/in/arvind-sushil-01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-montreal text-base mr-2 cursor-pointer"
            initial={{ color: "#606060" }}
            whileHover={{ color: "#ffffff" }}
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/arvindsushil_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-montreal text-base mr-2 cursor-pointer"
            initial={{ color: "#606060" }}
            whileHover={{ color: "#ffffff" }}
          >
            Instagram
          </motion.a>
          <motion.a 
            href="mailto:arvindksushil@gmail.com?subject=Hello, should we have a coffee chat?"
            className="text-montreal text-base mr-2 cursor-pointer"
            initial={{ color: "#606060" }}
            whileHover={{ color: "#ffffff" }}
          >
            E-mail
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 h-full">
            {listItems}
          <div className="sm:hidden col-span-2 h-full hide_scroll overflow-y-auto pt-1 pb-16">
            <div className="sticky top-4 overflow-y-auto ">
              <ImageGrid items={items} selectedIndex={selectedIndex} showAllImages={showAllImages} />
            </div>
          </div>
          <div className="hidden md:block col-span-2 h-full hide_scroll overflow-y-auto pb-16">
            <div className="sticky overflow-y-auto ">
              <ImageGrid items={items} selectedIndex={selectedIndex} showAllImages={showAllImages} />
            </div>
          </div>
        </div>
      </div>
    );
  };

const Home = () => {
    return (
            <motion.div className="container mx-auto flex flex-col px-4 md:px-6 h-screen overflow-hidden"
            initial="hidden" animate="visible">
                <motion.div variants={loadAnimation}>
                <Header />
                </motion.div>
                {/* <motion.div className="md:mt-12 flex-1" variants={loadAnimation}> */}
                <div className="md:mt-12 flex-1">
                  <CollapsibleList items={projectData} />
                </div>
                {/* </motion.div> */}
                    
            </motion.div>
    )
};


export default Home;