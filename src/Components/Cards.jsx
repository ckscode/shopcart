import React, { useState } from "react";

const Cards = ({ data, items, setItems }) => {
  const [element] = useState([]);

  const handleInc = (e) => {
    element[e] = e;
    setItems((el) => el + 1);
  };

  const handleDec = (e) => {
    element[e] = " ";
    if (items > 0) {
      setItems((el) => el - 1);
    }
  };
  console.log(element);

  return data.map((ele, index) => {
    return (
      <div key={ele.id} className="col mb-5">
        <div className="card h-100">
          {ele.sale ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            <></>
          )}

          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{ele.product}</h5>
              {ele.popular ? (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
              ) : (
                <></>
              )}
              {ele.offer ? (
                <>
                  {" "}
                  <span className="text-muted text-decoration-line-through">
                    {ele.oldrate}
                  </span>
                  &nbsp;{ele.rate}
                </>
              ) : (
                <>{ele.rate}</>
              )}
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {element[index] !== ele.id ? (
                <a
                  className="btn btn-outline-success mt-auto"
                  onClick={(e) => {
                    handleInc(index);
                  }}
                  href="#"
                >
                  {" "}
                  Add to cart
                </a>
              ) : (
                <a
                  className="btn btn-outline-danger mt-auto"
                  onClick={(e) => {
                    handleDec(index);
                  }}
                  href="#"
                >
                  {" "}
                  Remove from Cart
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Cards;
