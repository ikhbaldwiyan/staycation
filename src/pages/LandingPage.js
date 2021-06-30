import React from 'react';
import Header from 'parts/Header'
import Articles from 'parts/MostPicked'
import News from 'parts/Categories'
import Footer from 'parts/Footer'

function LandingPage(props) {
  return (
    <div>
      <Header {...props} />
      <div className="container">
        <Articles />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
