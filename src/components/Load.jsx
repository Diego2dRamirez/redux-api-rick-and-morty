import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const currentPage = useSelector(state => state.page)
  return (
    <div className="d-flex align-items-center my-4 flex-column">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="text-white">Loading Page {currentPage}...</span>
    </div>
  )
};

export { Loader }