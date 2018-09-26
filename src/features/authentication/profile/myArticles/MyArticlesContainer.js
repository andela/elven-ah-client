import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'short-id';
import MyArticles from './MyArticles';

export default class MyStoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profile } = this.props;
    const {
      firstName, lastName, image, articles,
    } = profile;
    return (
      <React.Fragment>
        {
          articles
            ? articles.map(article => (
              <MyArticles
                key={shortId.generate()}
                firstName={firstName}
                lastName={lastName}
                article={article}
                image={image}
              />
            )) : ''
        }
      </React.Fragment>
    );
  }
}

MyStoriesContainer.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};
