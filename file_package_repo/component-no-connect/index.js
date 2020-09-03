import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Placeholder_pascal extends Component {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: '',
  };

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    const { className } = this.props;

    return (
      <div className={`Placeholder_kebab ${className}`}>

      </div>
    );
  }
}
