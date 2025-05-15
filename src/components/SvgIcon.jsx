import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ name, color = 'currentColor', size = 24, className = '', ...props }) => {
  const symbolId = `#icon-${name}`; // 与symbolId配置格式匹配[5](@ref)

  return (
    <svg className={`svg-icon ${className}`} style={{ width: `${size}px`, height: `${size}px` }} aria-hidden="true" {...props}>
      <use xlinkHref={symbolId} fill={color} />
    </svg>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default SvgIcon;
