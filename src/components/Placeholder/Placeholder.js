import React from "react";
import ContentLoader from "react-content-loader";
import { Card } from "react-bootstrap";

const Placeholder = (props) => (
  <Card className="mb-3">
    <ContentLoader
      speed={2}
      width={256}
      height={370}
      viewBox="0 0 256 370"
      style={{ width: "100%" }}
      backgroundColor="#f3f3f3"
      foregroundColor="#b7b4b4"
      {...props}
    >
      <rect x="19" y="395" rx="2" ry="2" width="140" height="23" />
      <rect x="3" y="224" rx="2" ry="2" width="221" height="49" />
      <rect x="2" y="11" rx="2" ry="2" width="254" height="200" />
      <rect x="3" y="286" rx="2" ry="2" width="128" height="22" />
    </ContentLoader>
  </Card>
);

export default Placeholder;
