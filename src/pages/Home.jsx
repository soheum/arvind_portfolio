import React, { useState, useMemo } from 'react';
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
        imageUrlWeb: "/assets/Collier-Top.webp",
        imageUrl2: "/assets/01-02.jpg",
        imageUrl2Web: "/assets/Collier-interlock.webp",        
        imageUrl3: "/assets/01-03.jpg",
        imageUrl3Web: "/assets/Collier-Front-Buckle.webp",
        imageUrl4: "/assets/01-04.jpg",
        imageUrl4Web: "/assets/Collier-Front.webp",
        imageUrl5: "/assets/01-05.jpg",
        imageUrl5Web: "/assets/Collier-Rear.webp",
        imageUrl6: "/assets/01-06.jpg",
        imageUrl6Web: "/assets/Collier-Hook-Close-up.webp"
    },
    {
      title: "Starlight",
      category: "Precious wares",
      type: "Personal",
      year: "2024",
      description: "Gold dipped-Sterling silver bracelet.The design embodies harmony of contrasts, symbolizing unity and balance through its fluid and gentle shapes.",
      imageUrl: "/assets/03-01.jpg",
      imageUrlWeb: "/assets/Starlight-Still-2.webp",
      imageUrl2: "/assets/03-02.jpg",
      imageUrl2Web: "/assets/Starlight-Still-Detail.webp",
      imageUrl3: "/assets/03-03.jpg",
      imageUrl3Web: "/assets/Starlight-Top-View.webp",
      imageUrl4: "/assets/03-04.jpg",
      imageUrl4Web: "/assets/Starlight-transition-detail.webp",
  },
    {
      title: "Genesis",
      category: "Precious wares",
      type: "Personal",
      year: "2024",
      description: "A sterling silver badge capturing the tension between two volumes as they unite or separate, with a fastening D-pin at the back . Hallmarked with traditional symbols denoting the maker's mark, precious metal, place of origin, and year",
      imageUrl: "/assets/02-01.jpg",
      imageUrlWeb: "/assets/Genesis-Still.webp",
      imageUrl2: "/assets/02-02.jpg",
      imageUrl2Web: "/assets/Genesis-Bottom.webp",
      imageUrl3: "/assets/02-03.jpg",
      imageUrl3Web: "/assets/Genesis-Detail.webp",
      imageUrl4: "assets/02-04.jpg",
      imageUrl4Web: "/assets/Genesis-Gold-Still.webp",
      imageUrl5: "/assets/02-05.jpg",
      imageUrl5Web: "/assets/Genesis-Multi.webp",
  },
    {
      title: "GLO",
      category: "Electronics",
      type: "Commercial",
      year: "2021 -",
      description: "Developing new category of reduced risk products for GLO at British American Tobacco.",
      imageUrl: "/assets/04-01.jpg",
      imageUrlWeb: "/assets/Hyper-BAT.webp",
  },
];

const ImageGrid= ({ items, selectedIndex, showAllImages }) => {
  const randomImages = useMemo(() => {
    const images = [...items]
    .filter(item => item.title !== "GLO")
    .flatMap(item => [
      { src: item.imageUrl, title: item.title },
      { src: item.imageUrl2, title: item.title },
      { src: item.imageUrl3, title: item.title },
      { src: item.imageUrl4, title: item.title },
      { src: item.imageUrl5, title: item.title },
      { src: item.imageUrl6, title: item.title },
    ])
    .filter(image => image.src);
    while (images.length < 16) {
      images.push(...images.slice(0, 16 - images.length));
    }
    return images 
    .sort(() => Math.random() - 0.5)
    .slice(0, 16);
  }, [items]);

  if (showAllImages) {
    return (
      <div className="md:hidden flex flex-col space-y-1 pb-2">
        {randomImages.map((image, index) => (
          <picture key={index}>
            <source srcSet={image.src} type="image/webp" />
            <img
              src={image.src}
              alt={image.title}
              className="w-full aspect-square object-cover"
            />
          </picture>
        ))}
      </div>
    );
  }

  if (selectedIndex !== null) {
    return(
      <>
      <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-1">
      {items[selectedIndex].imageUrl && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl} type='image/webp' />
          <img
            src={items[selectedIndex].imageUrl}
            alt={items[selectedIndex].title}
            className="w-full h-full object-cover"
          />
        </picture>
        )}
        {items[selectedIndex].imageUrl2 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl2} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl2}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
         )}
        {items[selectedIndex].imageUrl3 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl3} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl3}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
      )}
        {items[selectedIndex].imageUrl4 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl4} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl4}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
      )}
        {items[selectedIndex].imageUrl5 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl5} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl5}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
        {items[selectedIndex].imageUrl6 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl6} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl6}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
      </div>

      <div className="md:hidden mb-8 flex flex-col space-y-1">
        <picture>
          <source srcSet={items[selectedIndex].imageUrl} type='image/webp' />
          <img
            src={items[selectedIndex].imageUrl}
            alt={items[selectedIndex].title}
            className="w-full h-full object-cover"
          />
        </picture>
        {items[selectedIndex].imageUrl2 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl2} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl2}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
         )}
        {items[selectedIndex].imageUrl3 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl3} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl3}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
      )}
        {items[selectedIndex].imageUrl4 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl4} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl4}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
      )}
        {items[selectedIndex].imageUrl5 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl5} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl5}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
        {items[selectedIndex].imageUrl6 && (
        <picture>
          <source srcSet={items[selectedIndex].imageUrl6} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl6}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
      </div>
      </>
    );
  }
  return (
    <>
    <div className="hidden md:grid grid-cols-4 gap-1 hide_scroll auto-rows-min ">
      {randomImages.map((image, index) => (
        <picture>
          <source srcSet={image.src} type="image/webp" />
          <img key={index} src={image.src} alt={image.title}
           className="w-full h-120 object-cover" />
        </picture>
      ))}
    </div>

    <div className="md:hidden flex flex-col space-y-2 pb-16">
      {randomImages.map((image, index) => (
        <picture>
          <source srcSet={image.src} type="image/webp" />
          <img key={index} src={image.src} alt={image.title}
           className="w-full h-120 object-cover" />
        </picture>
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
      <div className="flex flex-col justify-between hidden md:flex">
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
      </div>

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
            <div className="container mx-auto flex flex-col px-4 md:px-6 h-screen overflow-hidden">
                <Header />
                  <div className="md:mt-12 flex-1">
                    <CollapsibleList items={projectData} />
                  </div>
                    
            </div>
    )
};


export default Home;