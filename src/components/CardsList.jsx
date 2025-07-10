import React from "react";
import { Cards } from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../features/page/pageSlice";

const CardsList = () => {
  const currentPage = useSelector(state => state.page)
  const dispatch = useDispatch();


  return (
    <section className="">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <button type="button" className="btn btn-info"
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 1 }
        >
          ⬅️ Prev Page
        </button >
        <p className="text-white">Page {currentPage}</p>

        <button type="button" className="btn btn-info"
          onClick={() => dispatch(nextPage())}
        >
          Next Page ➡️
        </button>
      </div>

      <Cards />

    </section>
  )
}

export { CardsList };