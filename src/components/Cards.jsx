import React from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const data = useSelector(state => state.data)

  return (
    <section className="row row-cols-4 g-3">
      {
        data.map(card => (
          <div className="col" key={card.id}>
            <div className="card bg-success h-100" >
              <img src={card.image} className="card-img-top" alt={card.name} />

              <div className="card-body text-center text-info">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.species}</p>
                <p className="card-text">{card.origin.name}</p>
              </div>
            </div>
          </div>
        ))

      }
    </section>
  )
}

export { Cards };