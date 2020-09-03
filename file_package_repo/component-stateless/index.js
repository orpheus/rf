import React from 'react';
import PropTypes from 'prop-types';

const Placeholder_pascal = ({ className }) => (
  <div className={`Placeholder_kebab ${className}`}>

  </div>
);

Placeholder_pascal.propTypes = {
  className: PropTypes.string,
};
Placeholder_pascal.defaultProps = {
  className: '',
};

export default Placeholder_pascal;
