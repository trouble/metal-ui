import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const HomeIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon className={className} onClick={onClick} size={size} color={color}>
      <path d="M11,16 L11,12.990778 C11,12.4435864 11.4438648,12 12,12 C12.5522847,12 13,12.4509752 13,12.990778 L13,16 L15,16 L15,10.1065684 L12,7.35656838 L9,10.1065684 L9,16 L11,16 Z M17,16 L17.5,16 C18.0522847,16 18.5,16.4477153 18.5,17 C18.5,17.5522847 18.0522847,18 17.5,18 L6.5,18 C5.94771525,18 5.5,17.5522847 5.5,17 C5.5,16.4477153 5.94771525,16 6.5,16 L7,16 L7,11.9399017 L6.67572463,12.2371541 C6.26860564,12.6103465 5.63603827,12.5828436 5.26284586,12.1757246 C4.88965345,11.7686056 4.91715638,11.1360383 5.32427537,10.7628459 L11.3242754,5.26284586 C11.7065966,4.91238471 12.2934034,4.91238471 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L17,11.9399017 L17,16 Z"></path>
    </Icon>
  );
};

HomeIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default HomeIcon;