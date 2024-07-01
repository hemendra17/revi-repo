import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Boxsection() {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  // Update visibility state when the element is in view
  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <section className="box-sec" ref={ref}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box-grid">
                <div className="box-single">
                  <h2>
                    ${isVisible && <CountUp className="counterHeadSpan" end={125} duration={3} separator="," />}
                    K+
                    <span className='countersizeSpan'> New Revenue</span>
                  </h2>
                  <p>Revi drives over $125k in new revenue per location</p>
                </div>
                <div className="box-single">
                  <h2>
                    +{isVisible && <CountUp className="counterHeadSpan" end={20} duration={3} />}%
                    <span className='countersizeSpan'>Ticket Sizes</span>
                  </h2>
                  <p>Boost sales with smart, personalized upsells</p>
                </div>
                <div className="box-single">
                  <h2>
                    {isVisible && <CountUp className="counterHeadSpan" end={91} duration={3} />}%
                    <span className='countersizeSpan'> Data Captured</span>
                  </h2>
                  <p>Automatically collect emails and phone numbers</p>
                </div>
                <div className="box-single">
                  <h2>
                    {isVisible && <CountUp className="counterHeadSpan" start={0} end={58} duration={3} />}%
                    <span className='countersizeSpan'> Upsell Rates</span>
                  </h2>
                  <p>More than half of Revi users buy additional items</p>
                </div>
                <div className="box-single">
                  <h2>
                    {isVisible && <CountUp className="counterHeadSpan" end={0} duration={3} />}%
                    <span className='countersizeSpan'> Delivery Commissions</span>
                  </h2>
                  <p>Split up Revi’s flat $7.99 delivery fee</p>
                </div>
                <div className="box-single">
                  <h2>
                    +{isVisible && <CountUp className="counterHeadSpan" end={22} duration={3} />}%
                    <span className='countersizeSpan'> Repeat Orders</span>
                  </h2>
                  <p>Remarket to customers without lifting a finger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
