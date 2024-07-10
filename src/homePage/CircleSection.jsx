import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CircleSection() {
  const joker = useRef(null);
  const { scrollYProgress } = useScroll({
    target: joker,
    offset: ['center start', 'start start',],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 0.6]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  const smoothScaleInView = useSpring(scale, { stiffness: 200, damping: 20 });
  const smoothScaleOutOfView = useSpring(0.3, { stiffness: 300, damping: 30 });
  const smoothScaleInView2 = useSpring(scale2, { stiffness: 200, damping: 20 });
  const smoothScaleOutOfView2 = useSpring(0.5, { stiffness: 300, damping: 30 });




  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,

  });

  useEffect(() => {
    if (inView) {
      console.log('Element is in view');
    } else {
      console.log('Element is out of view');
    }
  }, [inView]);

  return (
    <section className="circle-image">
      <div ref={joker} className="container">
        <motion.div
          className="ring-wrapper"
          style={{
            scale: inView ? smoothScaleInView : smoothScaleOutOfView,
            // scale: inView ? smoothsca : 0.4,
            transition: '0.5s ease',
          }}
          ref={ref} // Attach the ref to the element you want to observe
        >
          <div id="layer-1" className="ring layer-1">
            <div className="cent_text">
              <h2>
                eCommerce-inspired checkout, marketing, and delivery for businesses.
              </h2>
              <p>
                Revi drives new revenue and automatically markets to your customers while replacing
                dozens of time-consuming tools. Oh, Revi does 0% commission delivery too.
              </p>
            </div>
            <motion.div className="ring-display" style={{
              scale: inView ? smoothScaleInView2 : smoothScaleOutOfView2,

              // scale: inView ? smoothsca : 0.4,
              transition: '1.1s ease',
            }}
              ref={ref} >
              {['Advertising', 'Ordering', 'Upsells', 'Rewards', 'Analytics', 'Texts', 'Coupons', 'Food Pics', 'CRM', 'Marketplace', 'Delivery', 'Menu'].map((text, index) => (
                <div key={index} className="label">
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
            <div className="interaction" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// import React, { useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// export default function CircleSection() {
//   const joker = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: joker,
//     offset: ['center start', 'start start',],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.5, 0.6]);
//   const scale2 = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
//   const smoothScaleInView = useSpring(scale, { stiffness: 200, damping: 20 });
//   const smoothScaleOutOfView = useSpring(0.3, { stiffness: 300, damping: 30 });
//   const smoothScaleInView2 = useSpring(scale2, { stiffness: 200, damping: 20 });
//   const smoothScaleOutOfView2 = useSpring(0.5, { stiffness: 300, damping: 30 });




//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: false,

//   });

//   useEffect(() => {
//     if (inView) {
//       console.log('Element is in view');
//     } else {
//       console.log('Element is out of view');
//     }
//   }, [inView]);

//   return (
//     <section className="circle-image">
//       <div ref={joker} className="container">
//         <motion.div
//           className="ring-wrapper"
//           style={{
//             scale: inView ? smoothScaleInView : smoothScaleOutOfView,
//             // scale: inView ? smoothsca : 0.4,
//             transition: '0.5s ease',
//           }}
//           ref={ref} // Attach the ref to the element you want to observe
//         >
//           <div id="layer-1" className="ring layer-1">
//             <div className="cent_text">
//               <h2>
//                 eCommerce-inspired checkout, marketing, and delivery for businesses.
//               </h2>
//               <p>
//                 Revi drives new revenue and automatically markets to your customers while replacing
//                 dozens of time-consuming tools. Oh, Revi does 0% commission delivery too.
//               </p>
//             </div>
//             <motion.div className="ring-display" style={{
//               scale: inView ? smoothScaleInView2 : smoothScaleOutOfView2,

//               // scale: inView ? smoothsca : 0.4,
//               transition: '1.1s ease',
//             }}
//               ref={ref} >
//               {['Advertising', 'Ordering', 'Upsells', 'Rewards', 'Analytics', 'Texts', 'Coupons', 'Food Pics', 'CRM', 'Marketplace', 'Delivery', 'Menu'].map((text, index) => (
//                 <div key={index} className="label">
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </motion.div>
//             <div className="interaction" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }