import React from 'react';

import OneImg from '../../assets/how-it-works-image/1.png';
import TwoImg from '../../assets/how-it-works-image/2.png';
import ThreeImg from '../../assets/how-it-works-image/3.png';
import FourImg from '../../assets/how-it-works-image/4.png';
import FiveImg from '../../assets/how-it-works-image/5.png';
import SixImg from '../../assets/how-it-works-image/6.png';
import SecondImg from '../../assets/2.png';
import Map from '../../assets/map.png';
import FifthImg from '../../assets/5.png';
import CircleImg from '../../assets/circle.png';
import FeatureImg from '../../assets/features-img1.png';
import P1 from '../../assets/partner-image/p1.png';
import P2 from '../../assets/partner-image/p2.png';
import P3 from '../../assets/partner-image/p3.png';
import P4 from '../../assets/partner-image/p4.png';
import P5 from '../../assets/partner-image/p5.png';
import P6 from '../../assets/partner-image/p6.png';
import P7 from '../../assets/partner-image/p7.png';
import P8 from '../../assets/partner-image/p8.png';
import P9 from '../../assets/partner-image/p9.png';
import P10 from '../../assets/partner-image/p10.png';
import P11 from '../../assets/partner-image/p11.png';
import P12 from '../../assets/partner-image/p12.png';
import P13 from '../../assets/partner-image/p13.png';
import P14 from '../../assets/partner-image/p14.png';
import P15 from '../../assets/partner-image/p15.png';
import P16 from '../../assets/partner-image/p16.png';
import P17 from '../../assets/partner-image/p17.png';
import P18 from '../../assets/partner-image/p18.png';

function LandingPage() {
  return (
    <>
      <div
        className="main-banner-section jarallax"
        data-jarallax='{"speed": 0.3}'
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">
                    <h1>Dobzin – India’s Leading Personal Line of Credit</h1>
                    <p>
                      Dobzin gives you credit for all your needs with flexible
                      repayment options.
                    </p>
                    <div className="overview-content"></div>

                    <ul className="services-list">
                      <p>
                        <i className="flaticon-check-mark"></i> Get instant
                        approval for a credit line online of up to ₹ 5 Lakh
                      </p>
                      <p>
                        <i className="flaticon-check-mark"></i> Shop Now and Pay
                        Us Later
                      </p>
                      <p>
                        <i className="flaticon-check-mark"></i> Withdraw as
                        little as ₹ 3,000 up to your full approved limit
                      </p>
                      <p>
                        <i className="flaticon-check-mark"></i> Pay interest
                        only on the amount used
                      </p>
                    </ul>
                    <a href="sign-up.html" className="btn btn-primary">
                      Apply Now
                    </a>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="money-transfer-form">
                    <form>
                      <img src={FifthImg} alt="logo" />
                      <div className="money-transfer-info">
                        <strong style={{ fontSize: '26px', marginTop: '18px' }}>
                          Skip paying again & again. Pay ONE BILL instead.
                        </strong>
                      </div>
                      <div className="terms-info">
                        <br />
                        <p>
                          Get all your online purchases added up
                          <br />
                          And pay the total in one go.{' '}
                        </p>
                      </div>
                      <br />
                      <div className="single-information-box">
                        <div className="btn-box">
                          <a href="index.html" className="app-store-btn">
                            <i className="flaticon-apple"></i> Download on the{' '}
                            <span>App Store</span>{' '}
                          </a>
                          <a href="index.html" className="play-store-btn">
                            <i className="flaticon-play-store"></i> Get it on{' '}
                            <span>Google play</span>{' '}
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div id="jarallax-container-0" style={{"position": "absolute", "top": "0px", "left": "0px", "width": "100%", "height": "100%", "overflow": "hidden", "pointerEvents": none, "visibility": "hidden","z-index": "-100"}}>
              <div style="background-position: 50% 50%; background-size: 100%; background-repeat: no-repeat; background-image: image(assets/img/5.png); position: fixed; top: 0px; left: 0px; width: 2304px; height: 1080px; overflow: hidden; pointer-events: none; margin-left: -477.5px; margin-top: -340px; visibility: visible; transform: translateY(60px) translateZ(0px);"></div>
  </div>*/}
      </div>

      <section className="featured-boxes-area">
        <div className="container">
          <div className="featured-boxes-inner">
            <div className="row m-0">
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-fb7756">
                    <i className="flaticon-piggy-bank"></i>
                  </div>
                  <h3>Instant Credit</h3>
                  <p>
                    Enjoy credit limit upto ₹ 5 Lakh with a one time sign up.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-facd60">
                    <i className="flaticon-data-encryption"></i>
                  </div>
                  <h3>Quick Checkout</h3>
                  <p>
                    Finish placing orders in 10 seconds with a single click
                    checkout.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-1ac0c6">
                    <i className="flaticon-wallet"></i>
                  </div>
                  <h3>Secure Payments</h3>
                  <p>
                    Complete transactions without sharing any bank or card
                    details.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <i className="flaticon-shield"></i>
                  </div>
                  <h3>Offers</h3>
                  <p>Get exciting discount vouchers on timely repayments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-area ptb-70">
        <div className="container">
          <div className="section-title">
            <h2>How DOBZIN Works</h2>
            <div className="bar"></div>
            <p>Fast and flexible money at your fingertips.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-how-it-works">
                <img src={OneImg} alt="image" />
                <h3>Instant credit</h3>
                <p>
                  Get instant approval for a credit line online of up to ₹ 5
                  Lakh with an one time sign-up.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-how-it-works">
                <img src={TwoImg} alt="image" />
                <h3>Withdraw as low as ₹ 3,000</h3>
                <p>
                  Borrow an amount as low as ₹ 3,000 from your personal line of
                  credit with DOBZIN.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-how-it-works">
                <img src={ThreeImg} alt="image" />
                <h3>No usage, No interest</h3>
                <p>
                  Interest rates are applied only on the amount you borrow and
                  not your entire approved limit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-how-it-works">
                <img src={SixImg} alt="image" />
                <h3>Big rewards with our credit card </h3>
                <p>
                  DOBZIN credit card brings you attractive rewards on the very
                  first swipe along with discounts on food, fuel, and
                  entertainment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-how-it-works">
                <img src={FiveImg} alt="image" />
                <h3>Credit limit available for a lifetime</h3>
                <p>
                  Your credit limit is recharged as you repay your borrowed
                  amount giving you the flexibility to withdraw multiple times.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-how-it-works">
                <img src={FourImg} alt="image" />
                <h3>No collateral, No guarantors</h3>
                <p>
                  Now you don’t have to sacrifice your savings or risk your
                  valuable assets. DOBZIN's credit line app lets you access
                  money when you need it the most without any collateral
                  backing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area ptb-70 bg-f7fafd">
        <div className="container-fluid p-0">
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src={SecondImg} alt="image" />
                <div className="circle-img">
                  <img src={CircleImg} alt="image" />
                </div>
              </div>
            </div>
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">
                  Buy Now and checkout with just a click!
                </span>
                <h2>Shop Now. Pay Later</h2>
                <div className="bar"></div>
                <p>
                  Flexible no cost payment options on your favourite merchants.
                </p>

                <ul className="services-list">
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> One-tap payment
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> Settle your
                      payments once every 15 days
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> Repay via
                      affordable Instalment plans (No cost EMI available)
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> Accepted across
                      250+ websites and apps
                    </span>
                  </li>
                </ul>
                <a href="sign-up.html" className="btn btn-primary">
                  Get Credit Limit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area ptb-70">
        <div className="container-fluid p-0">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content left-content">
                <span className="sub-title">
                  Paperless and 100% digital process
                </span>
                <h2>Instant Credit Line Upto ₹ 5 Lac</h2>
                <div className="bar"></div>
                <p>Fast & Affordable at your fingertips.</p>

                <ul className="services-list">
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> Online process
                      with minimal documentation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> One time approval
                      for a lifetime of usage
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> No bank visit, no
                      collateral needed
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-check-mark"></i> Pay interest only
                      on amount taken and not approved
                    </span>
                  </li>
                </ul>
                <a href="sign-up.html" className="btn btn-primary">
                  Get Credit Limit
                </a>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img src={FifthImg} alt="image" />
                <div className="circle-img">
                  <img src={CircleImg} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section ptb-70 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            {' '}
            <h2>Our Features</h2> <div className="bar"></div>
            <p>Painless. Transparent. Dobzin</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-box-list">
                <div className="row">
                  <div className="col-lg-12 col-sm-6 col-md-6">
                    <div className="features-box">
                      <div className="icon">
                        <i className="flaticon-settings"></i>
                      </div>
                      <h3>No transaction failures</h3>
                      <p>Shopping with a tap is instant</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-md-6">
                    <div className="features-box">
                      <div className="icon bg-f78acb">
                        <i className="flaticon-envelope-of-white-paper"></i>
                      </div>
                      <h3>The best kind of security</h3>
                      <p>Never give bank info to websites</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-md-6">
                    <div className="features-box">
                      <div className="icon bg-cdf1d8">
                        <i className="flaticon-menu"></i>
                      </div>
                      <h3>Wallet balance? Don't bother</h3>
                      <p>Order first. And pay for it later</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-md-6">
                    <div className="features-box">
                      <div className="icon bg-c679e3">
                        <i className="flaticon-info"></i>
                      </div>
                      <h3>No more "Processing refund"</h3>
                      <p>Merchants can refund instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="features-image">
                {' '}
                \
                <img src={FeatureImg} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funfacts-area ptb-70">
        <div className="container">
          <div className="section-title">
            <h2>We Always Try To Understand Customers Expectation</h2>
            <div className="bar"></div>
            <p>Skip paying again & again. Pay ONE BILL instead.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="2">
                    00
                  </span>
                  M+
                </h3>
                <p>Happy Consumers</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="500">
                    00
                  </span>
                  K+
                </h3>
                <p>Credit Transactions</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="250">
                    00
                  </span>
                  +
                </h3>
                <p>Merchants</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="400">
                    00
                  </span>
                  Cr +
                </h3>
                <p>Credit Disbursed</p>
              </div>
            </div>
          </div>
          <div className="contact-cta-box">
            <h3>Want Dobzin anywhere else?</h3>
            <p>Don't hesitate to contact us</p>
            <a href="contact.html" className="btn btn-primary">
              Contact Us
            </a>
          </div>
          <div className="map-bg">
            <img src={Map} alt="map" />
          </div>
        </div>
      </section>

      <section className="ready-to-talk">
        <div className="container">
          <div className="ready-to-talk-content">
            <h3>Pay with Dobzin at these leading merchants</h3>
          </div>
        </div>
      </section>
      <div className="partner-area">
        <div className="container">
          <h3>More that 1.5 million users and organizations use Dobzin</h3>
          <div className="partner-inner">
            <div className="row align-items-center">
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P1} alt="partner" />
                  <img src={P1} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P2} alt="partner" />
                  <img src={P2} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P3} alt="partner" />
                  <img src={P3} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P4} alt="partner" />
                  <img src={P4} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P5} alt="partner" />
                  <img src={P5} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P6} alt="partner" />
                  <img src={P6} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P7} alt="partner" />
                  <img src={P7} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P8} alt="partner" />
                  <img src={P8} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P9} alt="partner" />
                  <img src={P9} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P10} alt="partner" />
                  <img src={P10} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P11} alt="partner" />
                  <img src={P11} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P12} alt="partner" />
                  <img src={P12} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P13} alt="partner" />
                  <img src={P13} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P14} alt="partner" />
                  <img src={P14} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P15} alt="partner" />
                  <img src={P15} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P16} alt="partner" />
                  <img src={P16} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P17} alt="partner" />
                  <img src={P17} alt="partner" />
                </a>
              </div>
              <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                <a href="#">
                  <img src={P18} alt="partner" />
                  <img src={P18} alt="partner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
