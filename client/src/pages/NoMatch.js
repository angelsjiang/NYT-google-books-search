import React from "react";
import Jumbotron from "../components/Jumbotron";
import BodyWrapper from "../components/BodyWrapper";

function NoMatch() {
  return (
      <div>
        <Jumbotron />
        <BodyWrapper>
            <h4>404: No Match Found</h4>
        </BodyWrapper>
      </div>
  );
}

export default NoMatch;
