import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logoutUser } from '../authentication/authAction';
import { viewAllArticles } from '../articles/allArticles/allArticlesAction';
import AllArticles from '../articles/allArticles/AllArticlesContainer';

export class Home extends React.PureComponent {
  componentWillMount = async () => {
    const { getAllArticles } = await this.props;
    return getAllArticles();
  }

  render() {
    const {
      articles,
    } = this.props;
    return (
      /* main container */
      <div className="container-fluid">
        {/* header */}
        <header className="landing-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            {/* logo */}
            <div className="col-4 pt-1">
              <img src="https://res.cloudinary.com/cj-odina/image/upload/v1537734888/Logo_sywa2j.png" height="50px" alt="" />
              <Link className="landing-header-logo text-dark" style={{ paddingTop: '50px' }} to="/">&nbsp; &nbsp; Authors{"'"} Haven</Link>
            </div>
            {/* search and auth buttons */}
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Link to="/" className="text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-3"
                >
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <line x1="21" y1="21" x2="15.8" y2="15.8" />
                </svg>
              </Link>
              <Link className="btn btn-sm btn-outline-primary mx-1" to="/login">Sign in</Link>
              <Link className="btn btn-sm btn-outline-secondary" to="/signup">Sign up</Link>
            </div>
          </div>
        </header>

        {/* navbar/categories bar */}
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <Link className="p-2 text-muted" to="/categories/politics">Politics</Link>
            <Link className="p-2 text-muted" to="/categories/design">Design</Link>
            <Link className="p-2 text-muted" to="/categories/africa">Africa</Link>
            <Link className="p-2 text-muted" to="/categories/tech">Technology</Link>
            <Link className="p-2 text-muted" to="/categories/culture">Culture</Link>
            <Link className="p-2 text-muted" to="/categories/business">Business</Link>
            <Link className="p-2 text-muted" to="/categories/romance">Romance</Link>
            <Link className="p-2 text-muted" to="/categories/health">Health</Link>
            <Link className="p-2 text-muted" to="/categories/style">Style</Link>
            <Link className="p-2 text-muted" to="/categories/travel">Travel</Link>
            <Link className="p-2 text-muted" to="/categories/diy">DIY</Link>
            <Link className="p-2 text-muted" to="/categories/opinion">Opinion</Link>
          </nav>
        </div>

        {/* hero slider */}
        <Link className="text-white font-weight-bold card-link" to="/">
          <div className="jumbotron p-3 p-md-5 text-white rounder bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">Can I ASK You Something?</h1>
              <p className="lead my-3">One of the things I’ve learned while working at Andela is the art of giving constructive, ASK feedback.</p>
            </div>
          </div>
        </Link>

        {/* main */}
        <div className="articles-container">
          <div className="row mb-2">
            <AllArticles
              articles={articles.articles}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  getAllArticles: () => dispatch(viewAllArticles()),
});

Home.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  articles: PropTypes.shape([]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
