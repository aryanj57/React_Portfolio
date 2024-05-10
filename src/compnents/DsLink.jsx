import React from "react";
import { Link } from "react-router-dom";

const DsLink = ({ ...rest }) => {
  return <Link {...rest} style={{ textDecoration: "none" }} />;
};

export default DsLink;
