import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        });

        if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
        } else {
        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
        });
        const { client_secret } = await response.json();

        const { error } = await stripe.confirmCardPayment(client_secret, {
            payment_method: paymentMethod.id,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(`Payment succeeded with ${paymentMethod.id}`);
            setPaymentError(null);
            // Payment complete, update the UI or redirect to a success page
        }
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
            Pay
            </button>
        </form>
        {paymentError && <div>{paymentError}</div>}
        {paymentSuccess && <div>{paymentSuccess}</div>}
        </div>
    );
};

export default CheckoutForm;
