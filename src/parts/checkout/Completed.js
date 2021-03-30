import React from 'react'
import Fade from "react-reveal/Fade";

import Finish from "assets/images/finish.png";

export default function Completed() {
  return (
    <Fade>
      <div className="container mb-3">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img src={Finish} className="fluid" alt="Finish Ilustration"/>
            <p className="text-gray-500">
              We will inform you via email later
              once the transaction has been accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  )
}
