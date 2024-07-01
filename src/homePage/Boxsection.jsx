// import React from 'react'

// // Define the data array for the box items
// const boxData = [
//   { title: '$125k+ New Revenue', description: 'Revi drives over $125k in new revenue per location' },
//   { title: '+20% Ticket Sizes', description: 'Boost sales with smart, personalized upsells' },
//   { title: '91% Data Captured', description: 'Automatically collect emails and phone numbers' },
//   { title: '58% Upsell Rates', description: 'More than half of Revi users buy additional items' },
//   { title: '0% Delivery Commissions', description: 'Split up Revi’s flat $7.99 delivery fee' },
//   { title: '+22% Repeat Orders', description: 'Remarket to customers without lifting a finger' },
// ];

// export default function Boxsection() {
//   return (
//     <section className="box-sec" aria-labelledby="box-section-heading">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="box-grid">
//               {boxData.map((box, index) => (
//                 <div key={index} className="box-single">
//                   <h2>
//                     {box.title.split(' ').map((word, i) =>
//                       i === 1 ? <span key={i}> {word}</span> : word + ' '
//                     )}
//                   </h2>
//                   <p>{box.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'

export default function Boxsection() {
  return (
    <>
      <section className="box-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box-grid">
                <div className="box-single">
                  <h2>
                    $125k+<span> New Revenue</span>
                  </h2>
                  <p>Revi drives over $125k in new revenue per location</p>
                </div>
                <div className="box-single">
                  <h2>
                    +20%<span> Ticket Sizes</span>
                  </h2>
                  <p>Boost sales with smart, personalized upsells</p>
                </div>
                <div className="box-single">
                  <h2>
                    91%<span> Data Captured</span>
                  </h2>
                  <p>Automatically collect emails and phone numbers</p>
                </div>
                <div className="box-single">
                  <h2>
                    58%<span> Upsell Rates</span>
                  </h2>
                  <p>More than half of Revi users buy additional items</p>
                </div>
                <div className="box-single">
                  <h2>
                    0%<span> Delivery Commissions</span>
                  </h2>
                  <p>Split up Revi’s flat $7.99 delivery fee</p>
                </div>
                <div className="box-single">
                  <h2>
                    +22%<span> Repeat Orders</span>
                  </h2>
                  <p>Remarket to customers without lifting a finger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
