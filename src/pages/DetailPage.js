import React, { Component } from 'react';
import itemDetail from 'json/itemDetails.json';

import Header from 'parts/Header';
import PageTitle from 'parts/PageTitle';
import FeaturedImages from 'parts/FeaturedImages';
import Description from 'parts/Description';
import BookingForm from 'parts/BookingForm';
import Footer from 'parts/Footer';

export default class DetailPage extends Component {

  componentDidMount() {
    window.title = 'Staycation | Detail Page'
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
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Description data={itemDetail} />
            </div>
            <div className="col-5" style={{padding: 50}}>
              <BookingForm data={itemDetail} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}
