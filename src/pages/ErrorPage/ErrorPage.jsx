import React from "react";
import { ContentWrapper } from "../../components";
import "./404.scss";

const ErrorPage = () => {
  return (
    <div className="app__page-not-found">
      <ContentWrapper>
        <span className="big-text">404</span>
        <span className="small-text">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};
export default ErrorPage;
