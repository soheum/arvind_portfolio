import React, { useState, useMemo } from 'react';
import '../index.css';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';
import { select } from 'framer-motion/client';

const ProjectList = ({ taskName, taskDescription, isSelected, onClick }) => {
    return (
        <div className="mb-4">   
            <motion.div 
            className="inline-block cursor-pointer"
            onClick={onClick}
            whileHover={{ color: "rgb(255 255 255)" }}
            initial={{ color: isSelected ? "rgb(255 255 255)" : "rgb(82 82 91)" }}
            animate={{ color: isSelected ? "rgb(255 255 255)" : "rgb(82 82 91)" }}
            transition={{ duration: 0.2 }}>
                <motion.span className="text-xl font-montreal">
                    {taskName}
                </motion.span>
            </motion.div>
            <motion.div className="text-base font-montreal pr-4"
                initial={{ opacity: 0, height: 0, color: isSelected ? "rgb(255 255 255)" : "rgb(82 82 91)"  }}
                animate={{
                    opacity: isSelected ? 1 : 0,
                    height: isSelected ? "auto" : 0,
                    color: isSelected ? "rgb(255 255 255)" : "rgb(82 82 91)"
                }}
                transition={{ duration: 0 }}>
                    {taskDescription}
                </motion.div>
        </div>
    )
}

const Collapsible = ({open, children, title, image}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    }

    return (      
        <>
        <div className="card w-full">
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <motion.div className="p-2">
                        <motion.span
                        className="font-montreal text-zinc-800 cursor-pointer"
                        whileHover={{ color: "rgb(255 255 255)"}}
                        onClick={handleFilterOpening}
                        >
                        {title}
                        </motion.span>
                    </motion.div>
                    <div>
                        <div>{isOpen && <span className="p-2 font-montreal text-white">{children}</span>}</div>
                    </div>
                </div>
                <div className="col-span-2 flex items-center"> {/* Takes up 2/3 of the grid */}
                    <div>
                    {isOpen && <motion.img 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={image}
                        className="w-[40rem] md:w-[45rem] lg:w-[40rem] shrink-0"
                    />
                    }</div>
                </div>
            </div>
        </div>
        </>
    )
}

const projectData = [
    {
        title: "Genesis",
        category: "Precious wares",
        type: "Personal",
        year: "2024",
        description: "A sterling silver badge capturing the tension between two volumes as they unite or separate, with a fastening D-pin at the back . Hallmarked with traditional symbols denoting the maker's mark, precious metal, place of origin, and year",
        // imageUrl: "../src/assets/Genesis-Still.jpg",
        imageUrl: "../src/assets/02-01.jpg",
        imageUrlWeb: "../src/assets/Genesis-Still.webp",
        imageUrl2: "../src/assets/02-02.jpg",
        // imageUrl2: "../src/assets/Genesis-Bottom.jpg",
        imageUrl2Web: "../assets/Genesis-Bottom.webp",
        // imageUrl3: "../src/assets/Genesis-Detail.jpg",
        imageUrl3: "../src/assets/02-03.jpg",
        imageUrl3Web: "../src/assets/Genesis-Detail.webp",
        // imageUrl4: "../src/assets/Genesis-Gold-Still.jpg",
        imageUrl4: "../src/assets/02-04.jpg",
        imageUrl4Web: "../assets/Genesis-Gold-Still.webp",
        // imageUrl5: "../src/assets/Genesis-Multi.jpg",
        imageUrl5: "../src/assets/02-05.jpg",
        imageUrl5Web: "../assets/Genesis-Multi.webp",
    },
    {
        title: "Starlight",
        category: "Precious wares",
        type: "Personal",
        year: "2024",
        description: "Gold dipped-Sterling silver bracelet.The design embodies harmony of contrasts, symbolizing unity and balance through its fluid and gentle shapes.",
        // imageUrl: "../src/assets/Starlight-Still-2.jpg",
        imageUrl: "../src/assets/03-01.jpg",
        imageUrlWeb: "../src/assets/Starlight-Still-2.webp",
        // imageUrl2: "../src/assets/Starlight-Still-Detail.jpg",
        imageUrl2: "../src/assets/03-02.jpg",
        imageUrl2Web: "../src/assets/Starlight-Still-Detail.webp",
        imageUrl3: "../src/assets/03-03.jpg",
        // imageUrl3: "../src/assets/Starlight-Top-View.jpg",
        imageUrl3Web: "../src/assets/Starlight-Top-View.webp",
        imageUrl4: "../src/assets/03-04.jpg",
        // imageUrl4: "../src/assets/Starlight-transition-detail.jpg",
        imageUrl4Web: "../src/assets/Starlight-transition-detail.webp",
    },
    {
        title: "Collier",
        category: "Objects",
        type: "Personal",
        year: "2025",
        description: "Personalized leather dog collar. The titanium buckle, cushioning suede patch and steel hook are subtle nods that capture the essence of our four legged friend.",
        // imageUrl: "../src/assets/Collier-Top.jpg",
        imageUrl: "../src/assets/01-01.jpg",
        imageUrlWeb: "../src/assets/Collier-Top.webp",
        // imageUrl2: "../src/assets/Collier-interlock.jpg",
        imageUrl2: "../src/assets/01-02.jpg",
        imageUrl2Web: "../src/assets/Collier-interlock.webp",        
        // imageUrl3: "../src/assets/Front-Buckle.jpg",
        imageUrl3: "../src/assets/01-03.jpg",
        imageUrl3Web: "../src/assets/Collier-Front-Buckle.webp",
        // imageUrl4: "../src/assets/Collier-Front.jpg",
        imageUrl4: "../src/assets/01-04.jpg",
        imageUrl4Web: "../src/assets/Collier-Front.webp",
        // imageUrl5: "../src/assets/Collier-Rear.jpg",
        imageUrl5: "../src/assets/01-05.jpg",
        imageUrl5Web: "../src/assets/Collier-Rear.webp",
        // imageUrl6: "../src/assets/Collier-Hook-Close-up.jpg",
        imageUrl6: "../src/assets/01-06.jpg",
        imageUrl6Web: "../src/assets/Collier-Hook-Close-up.webp"
    },
    {
      title: "GLO",
      category: "Electronics",
      type: "Commercial",
      year: "2021 -",
      description: "Developing new category of reduced risk products for GLO at British American Tobacco. Contact for more information.",
      // imageUrl: "../src/assets/X3-Cover.jpg",
      imageUrl: "../src/assets/04-01.jpg",
      imageUrlWeb: "../src/assets/Hyper-BAT.webp",
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
            <source srcset={image.src} type="image/webp" />
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
          <source srcset={items[selectedIndex].imageUrl} type='image/webp' />
          <img
            src={items[selectedIndex].imageUrl}
            alt={items[selectedIndex].title}
            className="w-full h-full object-cover"
          />
        </picture>
        )}
        {items[selectedIndex].imageUrl2 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl2} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl2}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
         )}
        {items[selectedIndex].imageUrl3 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl3} type='image/webp' />
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
          <source srcset={items[selectedIndex].imageUrl5} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl5}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
        {items[selectedIndex].imageUrl6 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl6} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl6}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
      </div>

      <div className="md:hidden flex flex-col space-y-1">
        <picture>
          <source srcset={items[selectedIndex].imageUrl} type='image/webp' />
          <img
            src={items[selectedIndex].imageUrl}
            alt={items[selectedIndex].title}
            className="w-full h-full object-cover"
          />
        </picture>
        {items[selectedIndex].imageUrl2 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl2} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl2}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
         )}
        {items[selectedIndex].imageUrl3 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl3} type='image/webp' />
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
          <source srcset={items[selectedIndex].imageUrl5} type='image/webp' />
        <img
          src={items[selectedIndex].imageUrl5}
          alt={items[selectedIndex].title}
          className="w-full h-full object-cover"
        />
        </picture>
        )}
        {items[selectedIndex].imageUrl6 && (
        <picture>
          <source srcset={items[selectedIndex].imageUrl6} type='image/webp' />
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
          <source srcset={image.src} type="image/webp" />
          <img key={index} src={image.src} alt={image.title}
           className="w-full h-120 object-cover" />
        </picture>
      ))}
    </div>

    <div className="md:hidden flex flex-col space-y-2 pb-16">
      {randomImages.map((image, index) => (
        <picture>
          <source srcset={image.src} type="image/webp" />
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
  
    // Toggle item expansion
    const toggleItem = (index) => {
      // if (index === 'all') {
      //   setShowAllImages(true);
      //   setSelectedIndex(null);
      //   setExpandedItems(new Set());
      //   return;
      // }
      if (index === 'all') {
        if (showAllImages) {
          setShowAllImages(false);
          setSelectedIndex(null);
          setExpandedItems(new Set());
          return;
        }
        setShowAllImages(true);
        setSelectedIndex(null);
        setExpandedItems(new Set());
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
          {/* Row of titles */}
          <div className="flex flex-row space-x-2 mb-4 w-full">
            <div>
              <button 
              onClick={() => toggleItem('all')}
              className="text-left w-full hover:text-white transition-colors mr-2"
              onMouseEnter={() => setHoveredIndex('all')}
              onMouseLeave={() => setHoveredIndex(null)}>
                <motion.span
                animate={{
                  color: showAllImages ? '#ffffff' : 
                  (expandedItems.size > 0 ? '#777777' : '#ffffff') 
            }}
            className="font-montreal ease-in text-base">
              All </motion.span> 
              </button>
            </div>
            {items.map((item, index) => (
              <div key={`row-${index}`}>
                <button 
                  onClick={() => toggleItem(index)}
                  className="text-left w-full hover:text-white transition-colors mr-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  <motion.span
                    animate={{
                      color: showAllImages ? '#777777' :
                      (expandedItems.size > 0
                        ? (expandedItems.has(index) || hoveredIndex === index ? "#ffffff" : "#777777")
                        : (hoveredIndex !== null ? (hoveredIndex === index ? "#ffffff" : "#777777")
                          : "#ffffff")),
                    }}
                    className="font-montreal ease-in text-base">
                    {item.title}
                  </motion.span>
                </button>
              </div>
            ))}
          </div>

          {/* Descriptions - rendered outside the flex row */}
          <AnimatePresence>
          {items.map((item, index) => (
            expandedItems.has(index) && (
              <motion.div
                key={`description-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2}}
                className="w-full overflow-hidden"
              >
                <div className="pb-4">
                  <span className="font-montreal text-white text-base">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            )
          ))}
          </AnimatePresence>
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
          <div className="col-span-2 h-full hide_scroll overflow-y-auto pt-1 pb-16">
            <div className="sticky top-4 overflow-y-auto ">
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