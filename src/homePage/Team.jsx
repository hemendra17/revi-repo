


import React from 'react'
import ts1 from '../images/ts-1.png'
import tr1 from '../images/tr-1.png'
import ts2 from '../images/ts-2.png'
import tr2 from '../images/tr-2.png'
import ts3 from '../images/ts-3.png'
import tr3 from '../images/tr-3.png'
import ts4 from '../images/ts-4.png'
import tr4 from '../images/tr-4.png'
import ts5 from '../images/ts-5.png'
import tr5 from '../images/tr-5.png'

import ts6 from '../images/ts-6.png'
import tr6 from '../images/tr-6.png'
import business from '../images/block-quote.png'
export default function Team() {
  return (
    <>
 <section className="team">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="team-single">
          <div className="ts_l">
            <img src={ts1} alt />
          </div>
          <div className="ts_r">
            <img src={tr1} alt />
            <h2>Piter Park</h2>
            <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
              order history saved, so I can order quick.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="team-single">
          <div className="ts_l">
            <img src={ts2} alt />
          </div>
          <div className="ts_r">
            <img src={tr2} alt />
            <h2>Andrea&nbsp;Piacquadio</h2>
            <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
              order history saved, so I can order quick.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="team-single">
          <div className="ts_l">
            <img src={ts3} alt />
          </div>
          <div className="ts_r">
            <img src={tr3} alt />
            <h2>Rebrand Cities</h2>
            <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
              order history saved, so I can order quick.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="quote-cover">
          <img src={business} alt />
          <h2>Businesses and customers love Revi.</h2>
          <p>Here’s what they have to say.</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="team-single">
          <div className="ts_l">
            <img src={ts4} alt />
          </div>
          <div className="ts_r">
            <img src={tr4} alt />
            <h2>Andrea Piacquadio</h2>
            <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
              order history saved, so I can order quick.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="team-single">
          <div className="ts_l">
            <img src={ts5} alt />
          </div>
          <div className="ts_r">
            <img src={tr5} alt />
            <h2>Dinielle De Veyra</h2>
            <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
              order history saved, so I can order quick.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="team-single">
          <div className="ts_l">
            <img src={ts6} alt />
          </div>
          <div className="ts_r">
            <img src={tr6} alt />
            <h2>Piacquadio</h2>
            <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
              order history saved, so I can order quick.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
