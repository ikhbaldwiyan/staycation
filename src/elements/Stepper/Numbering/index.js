import React from 'react'
import './index.scss';
import propTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

export default function Numbering({style, className, data, current}) {
  const KeysOfData = Object.keys(data)
  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          } 

          return (
            <li key={index} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          )
        })}
      </ol>
    </Fade>
  )
}

Numbering.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
  className: propTypes.string,
}
