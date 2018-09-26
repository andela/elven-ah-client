import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import './styles/App.css';
import routes from './routes/routes';
import Spinner from './shared/loaders/Spinner';

export const App = ({ history, loading }) => (
  <ConnectedRouter history={history}>
    <div>
      {loading ? <Spinner /> : ''}
      { routes }
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.common.loading,
});

export default connect(mapStateToProps)(App);
