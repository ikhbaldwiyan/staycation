import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/landingPage';

import Header from 'parts/Header';
import PageTitle from 'parts/detail/PageTitle';
import FeaturedImages from 'parts/detail/FeaturedImages';
import Content from 'parts/detail/Content';
import Testimoni from 'parts/Testimoni';
import Activities from 'parts/detail/Activities';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/actions/checkout';

class DetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Staycation | Detail Page';

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.match.params.id}`, this.props.match.params.id )
    }
  }

  render() {
    const { page, match } = this.props;

    if(!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];

    return (
      <>
        <Header {...this.props} />
          <PageTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
          <FeaturedImages data={page[match.params.id].imageId} />
          <Content data={page[match.params.id]} startBooking={this.props.checkoutBooking} />
          <Activities data={page[match.params.id].activityId} />
          <Testimoni data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailPage);
