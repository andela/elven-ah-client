import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logoutUser } from '../authentication/authAction';

const Home = ({ auth }) => {
  const name = auth.user.firstName ? `${auth.user.firstName} ${auth.user.lastName}` : 'Guest';
  const loginButton = !auth.name ? <Link to="/login" className="btn btn-primary btn-xl js-scroll-trigger mb-2">Get Started</Link> : null;
  const ProfileButton = <Link to="/Profile">Profile Button</Link>;
  return (
    <div className="text-center my-4">
      <header className="d-flex mt-2">
        <div className="my-auto mx-auto">
          <div className="row">
            <div className="mx-auto">
              <h1 className="text-uppercase">
                <strong>A social platform for authors and readers.</strong>
              </h1>
              <hr />
              <h1 className={auth.isAuthenticated ? 'text-uppercase text-success' : 'text-uppercase'}>
                Welcome
                {' '}
                {name}
              </h1>
              <h1>
                {!auth.isAuthenticated ? 'Please click the button below to get started' : ''}
              </h1>
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5">Join readers and writers across the globe and read world class articles</p>
              {loginButton}
              {ProfileButton}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="">
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

Home.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
