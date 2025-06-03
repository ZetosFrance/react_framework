import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ name, path = '', color = 'currentColor', size = 24, className = '', ...props }) => {
  // 根据 path 参数构建 symbolId
  const symbolId = path ? `#icon-${path}-${name}` : `#icon-${name}`;

  return (
    <svg className={`svg-icon ${className}`} style={{ width: `${size}px`, height: `${size}px` }} aria-hidden="true" {...props}>
      <use xlinkHref={symbolId} fill={color} />
    </svg>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default SvgIcon;
