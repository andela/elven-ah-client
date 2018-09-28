import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logoutUser } from '../authentication/authAction';
import { viewAllArticles } from '../articles/allArticles/allArticlesAction';
import AllArticles from '../articles/allArticles/AllArticlesContainer';
import HTMLUtil from '../../shared/utilities/HTMLUtil';

export class Home extends React.PureComponent {
  componentWillMount = async () => {
    const { getAllArticles } = await this.props;
    await getAllArticles();
  }

  getArticlesWithImages = (articles) => {
    const articlesWithImages = articles.articles
      ? articles.articles.filter(article => HTMLUtil.hasImage(article.body) === true)
      : [];
    return articlesWithImages;
  }

  getFeaturedArticle = () => {
    const { articles } = this.props;
    const articlesWithImages = this.getArticlesWithImages(articles);
    const featured = articlesWithImages[Math.floor(Math.random() * articlesWithImages.length + 1)];
    return featured;
  };

  render() {
    const {
      articles,
      auth,
      logout,
    } = this.props;
    const { user, isAuthenticated } = auth;
    let articlesWithImages;
    let featuredArticle;
    if (articles) {
      articlesWithImages = this.getArticlesWithImages(articles);
      featuredArticle = this.getFeaturedArticle();
    }
    return (
      /* main container */
      <div className="container-fluid">
        {/* header */}
        <header className="single-article-nav landing-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="">
              <Link to="/" className="header-brand-text text-dark landing-header-logo">
                <img
                  src="https://res.cloudinary.com/cj-odina/image/upload/v1537734888/Logo_sywa2j.png"
                  className="brand-logo ml-1"
                  alt=""
                />
              Authors{"'"} Haven
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {isAuthenticated
                  ? (
                    <React.Fragment>
                      <li className="nav-item">
                        <Link to="/upgrade" className="nav-link ml-auto">
                          <button type="button" className="btn btn-sm upgrade-button">
                              Upgrade
                          </button>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/notifications" className="nav-item nav-link">
                          <i className="nav-item nav-link fas fa-lg fa-bell" />
                          <span className="notification-value">2</span>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link to="/" className="nav-item nav-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src={user.image} className="rounded-circle profile-photo border border-info" alt="" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                          <Link to="/articles/publish" className="dropdown-item">
                              New Story
                          </Link>
                          <Link to={`/users/${user.username}`} onClick={this.fetchUserProfile} className="dropdown-item">
                              Profile
                          </Link>
                          <button type="button" onClick={logout} className="dropdown-item">
                              Logout
                          </button>
                        </div>
                      </li>
                    </React.Fragment>
                  )
                  : (
                    <React.Fragment>
                      <Link className="btn btn-sm btn-outline-primary mx-3" to="/login">Sign in</Link>
                      <Link className="btn btn-sm btn-outline-secondary" to="/signup">Sign up</Link>
                    </React.Fragment>
                  )
              }
              </ul>
            </div>
          </nav>
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
        {featuredArticle ? (
          <Link className="text-white font-weight-bold card-link" to={`/articles/${featuredArticle.slug}`}>
            <div
              className="jumbotron p-3 p-md-5 text-white rounder bg-dark"
              style={{ background: `url(${HTMLUtil.getImage(featuredArticle.body)}) fixed` }}
            >
              <div className="col-md-6 px-0">
                <React.Fragment>
                  <h1 className="display-4 font-italic">{featuredArticle.title}</h1>
                  <p className="lead my-3">{HTMLUtil.stripMarkup(featuredArticle.body).substring(0, 200)}</p>
                </React.Fragment>
              </div>
            </div>
          </Link>
        ) : false}

        {/* main */}
        <div className="articles-container">
          <div className="row mb-2">
            <AllArticles
              articles={articlesWithImages}
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
  articles: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
