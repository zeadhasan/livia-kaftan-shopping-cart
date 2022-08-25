import React from "react";
import "./Card.css";
import { useCart } from "react-use-cart";

const Card = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    emptyCart,
    removeItem,
  } = useCart();
  if (isEmpty) return <h5 className="text-center py-3">Cart Is Empty</h5>;
  return (
    <div className="container-fluid py-3">
      <div className="row justify-content-center">
        <h4 className="text-center py-3 text-decoration-underline">My Card</h4>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8  py-4 ">
          <div className="d-flex justify-content-center py-4">
            <p className="position-relative fw-bolder text-title">
              Card
              <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-1">
                {totalUniqueItems}
              </span>
            </p>
            <p className="fw-bolder text-title mx-5">
              Total Items
              <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1">
                {totalItems}
              </span>
            </p>
          </div>
          <div className="">
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr className="align-middle" key={index}>
                      <td>
                        <img
                          className="img-card"
                          src={item.img}
                          alt={item.title}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>Quantity: {item.quantity}</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-outline-danger mx-1"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-outline-success mx-1"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-outline-danger mx-1 my-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between py-3">
            <button onClick={() => emptyCart()} className="btn btn-outline-danger">Clear All</button>
            <h3>Total Price ${cartTotal}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
