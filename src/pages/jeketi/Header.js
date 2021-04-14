import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Header(props) {
  const roomId = props.match.params.id;
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="sapcing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-text-icon" href="" type="link">
              JKT48<span className="text-gray-900">SHOWROOM</span>
            </Button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass(`/live-stream/${roomId}`)}`}>
                  <Button className="nav-link" type="link" href={`/live-stream/${roomId}`}>
                    Live Stream
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/list-room")}`}>
                  <Button className="nav-link" type="link" href="/list-room">
                    Room List
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/about")}`}>
                  <Button className="nav-link" type="link" href="/">
                    About
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  )
}
