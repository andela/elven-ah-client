
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const { search } = await this.props;
      search(this.state);
    }
  }

  render() {
    const {
      value,
    } = this.state;
    return (
      <React.Fragment>
        <Search value={value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
      </React.Fragment>
    );
  }
}

SearchContainer.propTypes = {
  search: PropTypes.func.isRequired,
};
