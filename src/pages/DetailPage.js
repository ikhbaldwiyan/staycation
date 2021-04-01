import React, { Component } from 'react';
import itemDetail from 'json/itemDetails.json';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import PageTitle from 'parts/detail/PageTitle';
import FeaturedImages from 'parts/detail/FeaturedImages';
import Content from 'parts/detail/Content';
import Testimoni from 'parts/Testimoni';
import Categories from 'parts/Categories';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/actions/checkout';

class DetailPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Staycation | Detail Page'
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];

    return (
      <>
        <Header {...this.props} />
          <PageTitle breadcrumb={breadcrumb} data={itemDetail}  />
          <FeaturedImages data={itemDetail.imageUrls} />
          <Content startBooking={this.props.checkoutBooking} />
          <Categories data={itemDetail.categories} />
          <Testimoni data={itemDetail.testimonial} />
        <Footer />
      </>
    )
  }
}

export default connect(null, {checkoutBooking})(DetailPage);