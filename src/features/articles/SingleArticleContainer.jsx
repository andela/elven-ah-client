/* eslint-disable no-undef */

import React from 'react';
import SingleArticle from './SingleArticle';

export default class SingleArticleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divStyle: null,
    };
  }

  componentDidMount = () => {
    this.setState({
      divStyle: {
        backgroundColor: '#fafafa',
        backgroundImage: 'none',
        color: 'red',
      },
    });
  }

  render() {
    const { divStyle } = this.state;
    return (
      <SingleArticle pageStyle={divStyle} />
    );
  }
}
