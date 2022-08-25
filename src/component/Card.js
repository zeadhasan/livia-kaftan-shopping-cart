import React from "react";
import "./Card.css";
import { useCart } from "react-use-cart";

const Card = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cardTotal,
    updateItemQuantity,
    emptyCart,
    removeItem,
  } = useCart();
  if (isEmpty) return <h5 className="text-center py-3">Cart Is Empty</h5>;
  return (
    <div className="container-fluid py-3">
      <div className="row">
        <h4 className="text-center py-3 text-decoration-underline">My Card</h4>
        <div className="col-12 py-4 ">
          <div className="d-flex justify-content-center py-4 shadow">
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
          <div>
            <table className="table table-primary table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td><img src={item.img} alt={item.title} /></td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>Quantity: {item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
