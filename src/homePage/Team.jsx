


import React, { useEffect, useState } from 'react';
import ts1 from '../images/ts-1.png'
import ts2 from '../images/ts-2.png'
import ts3 from '../images/ts-3.png'
import ts4 from '../images/ts-4.png'
import ts5 from '../images/ts-5.png'

import ts6 from '../images/ts-6.png'
import business from '../images/block-quote.png'
export default function Team() {

  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleMouseOver = (id) => setHovered(id);
    const handleMouseOut = () => setHovered(null);

    const ids = [1, 2, 3, 4, 5, 6];
    ids.forEach((id) => {
      const element = document.getElementById(`circleScale${id}`);
      element.addEventListener('mouseover', () => handleMouseOver(id));
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(`circleScale${id}`);
        element.removeEventListener('mouseover', () => handleMouseOver(id));
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);




  useEffect(() => {







    return () => {



      document.getElementById("circleScale1").addEventListener("mouseover", mouseOver1);
      document.getElementById("circleScale1").addEventListener("mouseout", mouseOut1);
      function mouseOver1() {
        document.getElementById("textShow1").style.opacity = "1";
      }
      function mouseOut1() {
        document.getElementById("textShow1").style.opacity = "0";
      }

      document.getElementById("circleScale2").addEventListener("mouseover", mouseOver2);
      document.getElementById("circleScale2").addEventListener("mouseout", mouseOut2);
      function mouseOver2() {
        document.getElementById("textShow2").style.opacity = "1";
      }

      function mouseOut2() {
        document.getElementById("textShow2").style.opacity = "0";
      }

      document.getElementById("circleScale3").addEventListener("mouseover", mouseOver3);
      document.getElementById("circleScale3").addEventListener("mouseout", mouseOut3);
      function mouseOver3() {
        document.getElementById("textShow3").style.opacity = "1";
      }

      function mouseOut3() {
        document.getElementById("textShow3").style.opacity = "0";
      }

      document.getElementById("circleScale4").addEventListener("mouseover", mouseOver4);
      document.getElementById("circleScale4").addEventListener("mouseout", mouseOut4);
      function mouseOver4() {
        document.getElementById("textShow4").style.opacity = "1";
      }

      function mouseOut4() {
        document.getElementById("textShow4").style.opacity = "0";
      }

      document.getElementById("circleScale5").addEventListener("mouseover", mouseOver5);
      document.getElementById("circleScale5").addEventListener("mouseout", mouseOut5);
      function mouseOver5() {
        document.getElementById("textShow5").style.opacity = "1";
      }

      function mouseOut5() {
        document.getElementById("textShow5").style.opacity = "0";
      }

      document.getElementById("circleScale6").addEventListener("mouseover", mouseOver6);
      document.getElementById("circleScale6").addEventListener("mouseout", mouseOut6);
      function mouseOver6() {
        document.getElementById("textShow6").style.opacity = "1";
      }

      function mouseOut6() {
        document.getElementById("textShow6").style.opacity = "0";
      }


    }
  }, [hovered])







  // document.getElementById("circleScale1").addEventListener("mouseover", mouseOver1);
  // document.getElementById("circleScale1").addEventListener("mouseout", mouseOut1);
  // function mouseOver1() {
  //   document.getElementById("textShow1").style.opacity = "1";
  // }
  // function mouseOut1() {
  //   document.getElementById("textShow1").style.opacity = "0";
  // }

  // document.getElementById("circleScale2").addEventListener("mouseover", mouseOver2);
  // document.getElementById("circleScale2").addEventListener("mouseout", mouseOut2);
  // function mouseOver2() {
  //   document.getElementById("textShow2").style.opacity = "1";
  // }

  // function mouseOut2() {
  //   document.getElementById("textShow2").style.opacity = "0";
  // }

  // document.getElementById("circleScale3").addEventListener("mouseover", mouseOver3);
  // document.getElementById("circleScale3").addEventListener("mouseout", mouseOut3);
  // function mouseOver3() {
  //   document.getElementById("textShow3").style.opacity = "1";
  // }

  // function mouseOut3() {
  //   document.getElementById("textShow3").style.opacity = "0";
  // }

  // document.getElementById("circleScale4").addEventListener("mouseover", mouseOver4);
  // document.getElementById("circleScale4").addEventListener("mouseout", mouseOut4);
  // function mouseOver4() {
  //   document.getElementById("textShow4").style.opacity = "1";
  // }

  // function mouseOut4() {
  //   document.getElementById("textShow4").style.opacity = "0";
  // }

  // document.getElementById("circleScale5").addEventListener("mouseover", mouseOver5);
  // document.getElementById("circleScale5").addEventListener("mouseout", mouseOut5);
  // function mouseOver5() {
  //   document.getElementById("textShow5").style.opacity = "1";
  // }

  // function mouseOut5() {
  //   document.getElementById("textShow5").style.opacity = "0";
  // }

  // document.getElementById("circleScale6").addEventListener("mouseover", mouseOver6);
  // document.getElementById("circleScale6").addEventListener("mouseout", mouseOut6);
  // function mouseOver6() {
  //   document.getElementById("textShow6").style.opacity = "1";
  // }

  // function mouseOut6() {
  //   document.getElementById("textShow6").style.opacity = "0";
  // }




  return (
    <>
      {/* <!-- Team section start --> */}
      <section className="team">
        <div className="container">
          <div className="row">
            {/* ===================================== */}
            <div className="col-sm-6 col-md-4">
              <div className="team-single">
                <div className="ts_l circleScaleInnerimg">
                  <img src={ts1} alt />
                </div>
                <div className="ts_r">
                  <div id="circleScale1" className="circleScale circleScale1">
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                  <div className="circleScaleInnerTxt">
                    <h2>Piter Park</h2>
                    <p id="textShow1" className="textShow">Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                      order history saved, so I can order quick.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================================== */}
            <div className="col-sm-6 col-md-4">
              <div className="team-single">
                <div className="ts_l circleScaleInnerimg">
                  <img src={ts2} alt />
                </div>
                <div className="ts_r">
                  <div id="circleScale2" className="circleScale circleScale2">
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                  <div className="circleScaleInnerTxt">
                    <h2>Andrea&nbsp;Piacquadio</h2>
                    <p id="textShow2" className="textShow">Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                      order history saved, so I can order quick.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================================== */}
            <div className="col-sm-6 col-md-4">
              <div className="team-single">
                <div className="ts_l circleScaleInnerimg">
                  <img src={ts3} alt />
                </div>
                <div className="ts_r">
                  <div id="circleScale3" className="circleScale circleScale3">
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                  <div className="circleScaleInnerTxt">
                    <h2>Rebrand Cities</h2>
                    <p id="textShow3" className="textShow">Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                      order history saved, so I can order quick.</p>
                  </div>
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
                <div className="ts_l circleScaleInnerimg">
                  <img src={ts4} alt />
                </div>
                <div className="ts_r">
                  <div id="circleScale4" className="circleScale circleScale4">
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                  <div className="circleScaleInnerTxt">
                    <h2>Andrea Piacquadio</h2>
                    <p id="textShow4" className="textShow">Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                      order history saved, so I can order quick.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-single">
                <div className="ts_l circleScaleInnerimg">
                  <img src={ts5} alt />
                </div>
                <div className="ts_r">
                  <div id="circleScale5" className="circleScale circleScale5">
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                  <div className="circleScaleInnerTxt">
                    <h2>Dinielle De Veyra</h2>
                    <p id="textShow5" className="textShow">Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                      order history saved, so I can order quick.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-single">
                <div className="ts_l circleScaleInnerimg">
                  <img src={ts6} alt />
                </div>
                <div className="ts_r">
                  <div id="circleScale6" className="circleScale circleScale6">
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                  <div className="circleScaleInnerTxt">
                    <h2>Piacquadio</h2>
                    <p id="textShow6" className="textShow">Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                      order history saved, so I can order quick.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team section end --> */}

      {/* <section className="team">
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
</section> */}

    </>
  )
}
