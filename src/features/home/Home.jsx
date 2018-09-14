import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const Home = ({ auth }) => {
  const name = auth.user.firstName ? `${auth.user.firstName} ${auth.user.lastName}` : 'Guest';
  const loginButton = !auth.name ? <Link to="/login" className="btn btn-primary btn-xl js-scroll-trigger mb-2">Get Started</Link> : null;
  return (
    <div className="container my-4">
      <header className="text-center d-flex mt-2">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong>A social platform for authors and readers</strong>
              </h1>
              <hr />
              <h1 className={auth.user.firstName ? 'text-uppercase text-success' : 'text-uppercase'}>
                Welcome
                {' '}
                {name}
              </h1>
              <h1>
                {!auth.name ? 'Please click the button below to get started' : ''}
              </h1>
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5">Join readers and writers across the globe and read world class articles</p>
              {loginButton}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading text-primary">We have got what you need!</h2>
              <hr className="light my-4" />
              <p className="text-faded mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere iusto quas nam doloribus soluta velit eveniet asperiores tenetur! Iusto esse ullam ipsam quod molestiae, officiis repellendus totam cumque odio et?</p>
              <p className="text-faded mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere iusto quas nam doloribus soluta velit eveniet asperiores tenetur! Iusto esse ullam ipsam quod molestiae, officiis repellendus totam cumque odio et?</p>
              <p className="text-faded mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere iusto quas nam doloribus soluta velit eveniet asperiores tenetur! Iusto esse ullam ipsam quod molestiae, officiis repellendus totam cumque odio et?</p>
              <p className="text-faded mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere iusto quas nam doloribus soluta velit eveniet asperiores tenetur! Iusto esse ullam ipsam quod molestiae, officiis repellendus totam cumque odio et?</p>
              {loginButton}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});

Home.propTypes = {
  auth: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(Home);
