import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Placeholder_pascalComponent extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    className: PropTypes.string,
  };
  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { push, className } = this.props;

    return (
      <div className={`Placeholder_kebab ${className}`}>

      </div>
    );
  }
}
