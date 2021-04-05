import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/landingPage';

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimoni from 'parts/Testimoni'
import Footer from 'parts/Footer'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = 'Staycation'

    if (!this.props.page.landingPage)
      this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props} />
          <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
          <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostPicked} />
          <Categories data={page.landingPage.category} />
          <Testimoni data={page.landingPage.testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, {fetchPage})(LandingPage);