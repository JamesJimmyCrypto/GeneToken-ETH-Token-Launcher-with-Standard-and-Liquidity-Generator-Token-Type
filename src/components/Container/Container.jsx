import PropTypes from "prop-types";
import React from "react";

const Container = ({ children, fluid }) => {
  return <div className={`w-full ${fluid ? "max-w-full" : "max-w-screen-xl"} mx-auto px-5`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
  fluid: PropTypes.bool,
};

export default Container;
