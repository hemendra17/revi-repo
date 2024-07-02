


import React, { useEffect, useRef, useState } from 'react';

export default function CircleSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setTimeout(() => {
            setExpanded(true);
          }, 1500)
        } else {
          setExpanded(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <>

      <section className={`circle-image ${expanded ? 'expanded' : ''}`} ref={sectionRef}>
        <div className="container">
          <div className>

            <div className>
              <div className={`ring-wrapper ${expanded ? 'expanded' : ''}`}>
                <div id="layer-1" className={`ring layer-1 ${expanded ? 'expanded' : ''}`}>
                  <div className={`cent_text ${expanded ? 'expanded' : ''}`}>
                    <h2>eCommerce-inspired checkout, marketing, and delivery for businesses.</h2>
                    <p>Revi drives new revenue and automatically markets to your customers while replacing
                      dozens of time-consuming tools. Oh, Revi does 0% commission delivery too.</p>
                  </div>
                  <div className={`ring-display  ${expanded ? 'expanded' : ''}`}>
                    {['Advertising', 'Ordering', 'Upsells', 'Rewards', 'Analytics', 'Texts', 'Coupons', 'Food Pics', 'CRM', 'Marketplace', 'Delivery', 'Menu'].map((text, index) => (
                      <div key={index} className="label">
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="interaction" />
                </div>
              </div >
            </div >
          </div >
        </div >
      </section >


    </>
  )
}
