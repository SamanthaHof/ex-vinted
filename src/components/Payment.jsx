import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import { useState } from "react";

const stripePromise = leadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { title, price, description } = location.state;

  const option = {
    mode: "payment",
    amount: amount,
    currency: "eur",
  };
  return token ? (
    <>
      <span>
        <div className="payment">
          <div>
            <h1>Résumer de votre commande</h1>
            <ul>
              <il>
                Commande <p>{price}.00€</p>
              </il>
              <il>
                Frais protection acheteurs<p>0.50€</p>
              </il>
              <il>
                Frais de port <p>1.00€</p>
              </il>
            </ul>
            <div className="price">
              <p>Total</p>
              <p>{total}€</p>
              <div className="message">
                <p>
                  Il ne vous reste plus qu'une étape pour vous offrir
                  <span> {title}</span>. Vous allez payer <span>{price}€ </span>
                  (frais de protection et frais de port inclus).
                </p>
              </div>
              <div className="checkout-form">
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm amount={amount} description={description} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </span>{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;
