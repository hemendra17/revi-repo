



// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Kiosk from '../images/kiosk.png';
// import Rectangle from '../images/Rectangle-94.png';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);
//   const containerRef = useRef(null);
//   const slidesRef = useRef([]);

//   const isInView = useInView(containerRef, { threshold: 0.5 });

//   const slides = [
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Customer Mobile App',
//       description: 'Take orders from anywhere'
//     },
//     {
//       image: Kiosk,
//       title: 'Revi Customer Base',
//       description: 'Market to over 1M users'
//     },
//     {
//       image: Kiosk,
//       title: 'Driver Delivery',
//       description: 'Pay just $7.99 per order'
//     },
//     {
//       image: Kiosk,
//       title: 'Kitchen Management',
//       description: 'Elevate your operations'
//     },
//     {
//       image: Kiosk,
//       title: 'Analytics Dashboard',
//       description: 'See actionable insights'
//     },
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };


//   useEffect(() => {

//     slides.forEach((panel, index) => {
//       const contentElements = slides.querySelectorAll('c_img > *');

//       gsap.set(contentElements, {
//         y: 80,
//         opacity: 0
//       });

//       ScrollTrigger.create({
//         trigger: panel,
//         markers: true,
//         pin: true,
//         start: 'top 50%',
//         end: 'bottom 50%',
//         onEnter: () => {
//           setCurrentIndex(index);
//           gsap.to(contentElements, {
//             y: 0,
//             opacity: 1,
//             stagger: 0.05,
//             duration: 1
//           });
//         },
//         onLeave: () => {
//           gsap.to(contentElements, {
//             y: -80,
//             opacity: 0,
//             stagger: 0.05,
//             duration: 1
//           });
//         },
//         onLeaveBack: () => {
//           gsap.to(contentElements, {
//             y: -80,
//             opacity: 0,
//             stagger: 0.05,
//             duration: 1
//           });
//         },
//         onEnterBack: () => {
//           setCurrentIndex(index);
//           gsap.to(contentElements, {
//             y: 0,
//             opacity: 1,
//             stagger: 0.05,
//             duration: 1
//           });
//         }
//       });
//     });
//   }, []);



//   return (
//     <section className="carousel-sec" ref={containerRef}>
//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.8 }}
//               key={currentIndex}

//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}

//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Kiosk from '../images/kiosk.png';
import Rectangle from '../images/Rectangle-94.png';
import { useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {






  const slides = [
    {
      image: Kiosk,
      title: 'Self-service Kiosk',
      description: 'Save $50k/year on labor'
    },
    {
      image: Kiosk,
      title: 'Customer Mobile App',
      description: 'Take orders from anywhere'
    },
    {
      image: Kiosk,
      title: 'Revi Customer Base',
      description: 'Market to over 1M users'
    },
    {
      image: Kiosk,
      title: 'Driver Delivery',
      description: 'Pay just $7.99 per order'
    },
    {
      image: Kiosk,
      title: 'Kitchen Management',
      description: 'Elevate your operations'
    },
    {
      image: Kiosk,
      title: 'Analytics Dashboard',
      description: 'See actionable insights'
    },
  ];





  const panelsRef = useRef([]);
  const sliderwala = useRef(null);
  const isInview = useInView(sliderwala, { amount: "some" })
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let panels = gsap.utils.toArray(".card__content");

    panels.forEach((item, i) => {
      const contentElements = item.querySelectorAll(".card__inner > *");

      gsap.set(contentElements, {
        y: 0,
        opacity: 0
      });

      console.log('item', i, item)

      ScrollTrigger.create({
        trigger: item,
        markers: false,
        pin: true, toggleActions: 'play reverse play reverse',

        start: "top 50%",
        end: "bottom 50%",
        onEnter: ({ progress, direction, isActive }) => {
          const dot = document.getElementById("luckry")
          dot.style.display = 'block'
          console.log("onEnter", progress, direction, isActive);
          setCurrentIndex(i);
          gsap.fromTo(contentElements, { y: 10, opacity: 0 }, { y: -10, opacity: 1, stagger: 0.05 });
        },
        onLeave: ({ progress, direction, isActive }) => {
          const dot = document.getElementById("luckry")
          dot.style.display = 'none';
          console.log("onLeave", progress, direction, isActive);
          gsap.fromTo(contentElements, { y: 0, opacity: 0 }, { y: -80, opacity: 0, stagger: 0.05 });
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          const dot = document.getElementById("luckry")
          dot.style.display = 'none'
          console.log("onLeaveBack", progress, direction, isActive);
          gsap.fromTo(contentElements, { y: 0, opacity: 0 }, { y: -80, opacity: 0, stagger: 0.05 });
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          const dot = document.getElementById("luckry")
          dot.style.display = 'block'
          setCurrentIndex(i);
          console.log("onEnterBack", progress, direction, isActive);
          gsap.fromTo(contentElements, { y: 0, opacity: 0 }, { y: -10, opacity: 1, stagger: 0.05 });
        },
        onUpdate: (self) => {
          if (self.isActive) {
            setCurrentIndex(i);
          }
        }



      });
    });




  }, []);





  useEffect(() => {


    if (isInview) {

      const handleKeyDown = (e) => {
        const panels = gsap.utils.toArray(".card__content");
        let newIndex = currentIndex;

        if (e.key === 'ArrowUp') {
          newIndex = Math.max(currentIndex - 1, 0);
        } else if (e.key === 'ArrowDown') {
          newIndex = Math.min(currentIndex + 1, slides.length - 1);
        }

        if (newIndex !== currentIndex) {
          const prevContentElements = panels[currentIndex]?.querySelectorAll(".card__inner > *");
          const newContentElements = panels[newIndex]?.querySelectorAll(".card__inner > *");

          if (prevContentElements) {
            gsap.fromTo(prevContentElements, { y: 80, opacity: 0 }, { y: -80, opacity: 0, stagger: 0.05 });
          }
          if (newContentElements) {
            gsap.fromTo(newContentElements, { y: 0, opacity: 0 }, { y: -80, opacity: 0, stagger: 0.05 });
          }

          setCurrentIndex(newIndex);

          const currentItem = sliderwala.current.querySelectorAll('.list__item')[newIndex];
          if (currentItem) {
            currentItem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };

    }

  }, [currentIndex, isInview])


  return (
    <section className="crousalSec" id='crouseal'>
      {/* <div className="container"> */}

      <ul className="list" ref={sliderwala}>
        {slides.map((slide, index) => (
          <li className="list__item">
            <article className="card">
              <section className="card__content">
                <section className="card__inner">
                  <section className="slidePath">
                    <div className="row d-flex ">
                      <div className='col-md-4'>
                        <img src={slide.image} alt={slide.title} />
                      </div>
                      <div className='col-md-8'>
                        <h1 className="card__title">{slide.title}</h1>
                        <p className="card__text">{slide.description}</p>
                      </div>
                    </div>
                  </section>
                </section>
              </section>
            </article>
          </li>
        ))}
      </ul>



      {/* <div className="car-dots"> */}
      <ul className='dot' id='luckry'>
        {slides.map((slide, index) => {
          return <li className={index <= currentIndex ? 'active' : ''} key={index}></li>;
        })}
      </ul>
      {/* </div> */}
      {/* </div> */}



    </section >
  );
};

export default Carousel;




// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Kiosk from '../images/kiosk.png';
// import Rectangle from '../images/Rectangle-94.png';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);
//   const containerRef = useRef(null);

//   const isInView = useInView(containerRef, { threshold: 0.5 });

//   const slides = [
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Customer Mobile App',
//       description: 'Take orders from anywhere'
//     },
//     {
//       image: Kiosk,
//       title: 'Revi Customer Base',
//       description: 'Market to over 1M users'
//     },
//     {
//       image: Kiosk,
//       title: 'Driver Delivery',
//       description: 'Pay just $7.99 per order'
//     },
//     {
//       image: Kiosk,
//       title: 'Kitchen Management',
//       description: 'Elevate your operations'
//     },
//     {
//       image: Kiosk,
//       title: 'Analytics Dashboard',
//       description: 'See actionable insights'
//     },
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleScroll = (event) => {
//     if (scrolling) return;
//     setScrolling(true);

//     if (event.deltaY > 0) {
//       if (currentIndex < totalSlides - 1) {
//         nextSlide();
//         event.preventDefault();
//         event.stopPropagation();
//       }
//     } else {
//       if (currentIndex > 0) {
//         prevSlide();
//         event.preventDefault();
//         event.stopPropagation();
//       }
//     }

//     setTimeout(() => setScrolling(false), 600); // Disable scrolling for 600ms
//   };

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleWheel = (event) => {
//       if (isInView) {
//         handleScroll(event);
//       }
//     };

//     if (container) {
//       container.addEventListener('wheel', handleWheel, { passive: false });
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('wheel', handleWheel);
//       }
//     };
//   }, [isInView, scrolling, currentIndex]);

//   return (
//     <section className="carousel-sec" ref={containerRef}>
//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.8 }}
//               key={currentIndex}
//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}
//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useInView, useScroll } from 'framer-motion';
// import Kiosk from '../images/kiosk.png';
// import Rectangle from '../images/Rectangle-94.png';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);
//   const [inView, setInView] = useState(false);
//   const containerRef = useRef(null);

//   const isInview = useInView(containerRef,
//     {
//       margin: "0px 100px -50px 0px"
//     })






//   const slides = [
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Customer Mobile App',
//       description: 'Take orders from anywhere'
//     },
//     {
//       image: Kiosk,
//       title: 'Revi Customer Base',
//       description: 'Market to over 1M users'
//     },
//     {
//       image: Kiosk,
//       title: 'Driver Delivery',
//       description: 'Pay just $7.99 per order'
//     },
//     {
//       image: Kiosk,
//       title: 'Kitchen Management',
//       description: 'Elevate your operations'
//     },
//     {
//       image: Kiosk,
//       title: 'Analytics Dashboard',
//       description: 'See actionable insights'
//     },
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleScroll = (event) => {
//     if (scrolling) return;
//     setScrolling(true);

//     if (event.deltaY > 0) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }

//     event.preventDefault(); // Prevent default scroll behavior
//     event.stopPropagation(); // Stop event bubbling
//     setTimeout(() => setScrolling(false), 600); // Disable scrolling for 600ms
//   };

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleWheel = (event) => handleScroll(event);

//     container.addEventListener('wheel', handleWheel, { passive: false });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         setInView(entry.isIntersecting);
//       },
//       { threshold: 1.0 } // Fully in view
//     );

//     if (container) {
//       observer.observe(container);
//     }

//     return () => {
//       container.removeEventListener('wheel', handleWheel);
//       if (container) {
//         observer.unobserve(container);
//       }
//     };
//   }, [scrolling]);




//   useEffect(() => {
//     console.log('isInview', isInview)
//   }, [isInview])








//   return (
//     <section className="carousel-sec" ref={containerRef}>
//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.8 }}
//               key={currentIndex}
//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}
//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Kiosk from '../images/kiosk.png';
// import Rectangle from '../images/Rectangle-94.png';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);

//   const containerRef = useRef();

//   const slides = [
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Customer Mobile App',
//       description: 'Take orders from anywhere'
//     },
//     {
//       image: Kiosk,
//       title: 'Revi Customer Base',
//       description: 'Market to over 1M users'
//     },
//     {
//       image: Kiosk,
//       title: 'Driver Delivery',
//       description: 'Pay just $7.99 per order'
//     },
//     {
//       image: Kiosk,
//       title: 'Kitchen Management',
//       description: 'Elevate your operations'
//     },
//     {
//       image: Kiosk,
//       title: 'Analytics Dashboard',
//       description: 'See actionable insights'
//     },
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleScroll = (event) => {
//     if (scrolling) return;
//     setScrolling(true);

//     if (event.deltaY > 0) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }

//     event.preventDefault(); // Prevent default scroll behavior
//     event.stopPropagation(); // Stop event bubbling
//     setTimeout(() => setScrolling(false), 600); // Disable scrolling for 600ms
//   };

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleWheel = (event) => handleScroll(event);

//     container.addEventListener('wheel', handleWheel, { passive: false });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         setInView(entry.isIntersecting);
//       },
//       { threshold: 1.0 } // Fully in view
//     );

//     if (container) {
//       observer.observe(container);
//     }

//     return () => {
//       container.removeEventListener('wheel', handleWheel);
//       if (container) {
//         observer.unobserve(container);
//       }
//     };
//   }, [scrolling]);

//   // useEffect(() => {
//   //   const container = containerRef.current;

//   //   const handleWheel = (event) => handleScroll(event);

//   //   container.addEventListener('wheel', handleWheel, { passive: false });

//   //   return () => {
//   //     container.removeEventListener('wheel', handleWheel);
//   //   };
//   // }, [scrolling]);

//   return (
//     <section className="carousel-sec" ref={containerRef}>
//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.8 }}
//               key={currentIndex}
//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}
//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Kiosk from '../images/kiosk.png';
// import Rectangle from '../images/Rectangle-94.png';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);

//   const containerRef = useRef();

//   const slides = [
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Customer Mobile App',
//       description: 'Take orders from anywhere'
//     },
//     {
//       image: Kiosk,
//       title: 'Revi Customer Base',
//       description: 'Market to over 1M users'
//     },
//     {
//       image: Kiosk,
//       title: 'Driver Delivery',
//       description: 'Pay just $7.99 per order'
//     },
//     {
//       image: Kiosk,
//       title: 'Kitchen Management',
//       description: 'Elevate your operations'
//     },
//     {
//       image: Kiosk,
//       title: 'Analytics Dashboard',
//       description: 'See actionable insights'
//     },
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) {
//       setCurrentIndex(currentIndex + 1);
//       return currentIndex + 1
//     }

//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       return currentIndex + 1

//     }
//   };

//   const handleScroll = (event) => {
//     let localIndexSlide
//     if (event.deltaY > 0) {
//       localIndexSlide = nextSlide();
//     } else {
//       localIndexSlide = prevSlide();
//     }

//     console.log(localIndexSlide > 0, localIndexSlide)
//     console.log(localIndexSlide < 5, localIndexSlide)
//     console.log(currentIndex < 5, currentIndex)
//     if (currentIndex > 0 && containerRef < 5) {
//       alert(currentIndex)
//       // console.log(currentIndex)
//       event.preventDefault(); // Prevent default scroll behavior
//       event.stopPropagation(); // Stop event bubbling
//     }

//     if (scrolling) return;
//     setScrolling(true);

//     setTimeout(() => setScrolling(false), 600); // Disable scrolling for 600ms


//   };

//   // Add class to body when component is mounted and remove when unmounted
//   // useEffect(() => {
//   //   // document.body.classList.add('carousel-scroll-lock');

//   //   return () => {
//   //     document.body.classList.remove('carousel-scroll-lock');
//   //   };
//   // }, []);

//   return (
//     <section className="carousel-sec" onWheel={handleScroll} ref={currentIndex === 0 || containerRef === 5 ? containerRef : null}>

//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.8 }}
//               key={currentIndex}
//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}
//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import Kiosk from '../images/kiosk.png';
// import Rectangle from '../images/Rectangle-94.png';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);

//   const containerRef = useRef();

//   const slides = [
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk 2 ',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk 3',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk 3',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk 4',
//       description: 'Save $50k/year on labor'
//     },
//     {
//       image: Kiosk,
//       title: 'Self-service Kiosk 5',
//       description: 'Save $50k/year on labor'
//     },

//     // Add more slides as needed
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleScroll = (event) => {
//     if (scrolling) return;
//     setScrolling(true);

//     setTimeout(() => setScrolling(false), 600); // Disable scrolling for 600ms

//     if (event.deltaY > 0) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }

//     event.preventDefault(); // Prevent default scroll behavior
//   };
//   return (
//     <section className="carousel-sec" onWheel={handleScroll}>
//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.5 }}
//               key={currentIndex}
//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}
//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//   return (
//     <section className="carousel-sec" onWheel={handleScroll}>
//       <div className="container">
//         <div className="row car_cover">
//           <div className="col-sm-3 col-md-4">
//             <motion.div
//               className="c_img"
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.5 }}
//               key={currentIndex}
//             >
//               <img src={slides[currentIndex].image} alt="" />
//             </motion.div>
//           </div>
//           <div className="col-sm-7 col-md-6">
//             <div className="c-img-box">
//               <motion.img
//                 src={Rectangle}
//                 alt=""
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentIndex}
//               />
//               <h4>{slides[currentIndex].title}</h4>
//               <p>{slides[currentIndex].description}</p>
//             </div>
//           </div>
//           <div className="col-md-2">
//             <div className="car-dots">
//               <ul>
//                 {slides.map((slide, index) => (
//                   <li key={index} className={index <= currentIndex ? 'active' : ''} />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react'
// import Kiosk from '../images/kiosk.png'
// import Rectangle from '../images/Rectangle-94.png'
// export default function Carousel() {
//   return (
//     <>

//       <section className="carousel-sec">
//         <div className="container">
//           <div className="row car_cover">
//             <div className="col-sm-3 col-md-4">
//               <div className="c_img">
//                 <img src={Kiosk} alt />
//               </div>
//             </div>
//             <div className="col-sm-7 col-md-6">
//               <div className="c-img-box">
//                 <img src={Rectangle} alt />
//                 <h4>Self-service Kiosk</h4>
//                 <p>Save $50k/year on labor</p>
//               </div>
//             </div>
//             <div className="col-md-2">
//               <div className="car-dots">
//                 <ul>
//                   <li className="active" />
//                   <li className="active" />
//                   <li className="active" />
//                   <li />
//                   <li />
//                   <li />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   )
// }
