import React from "react";
import { css } from "@emotion/core";

const styles = css`
  .routeSkipHeading {
    position: relative;
  }

  a.routeSkipLink {
    display: inline-block;
    margin-left: -0.75em;
    opacity: 0;
    position: absolute;

    &:before {
      content: "<";
      display: block;
    }
  }

  .routeSkipLink:focus,
  .routeSkipLink:hover {
    opacity: 1;
  }
`;

const RouteHeading = ({ level = 1, targetID, children }) => {
  const Heading = `h${level}`;

  return (
    <Heading css={styles} className="routeSkipHeading">
      <a
        id="skip-link"
        className="routeSkipLink"
        aria-label={`skip to ${targetID}`}
        href={`#${targetID}`}
      ></a>
      {children}
    </Heading>
  );
};

export default RouteHeading;
