import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [paymentError, setPaymentError] = useState<string | undefined>(undefined);
    const [paymentSuccess, setPaymentSuccess] = useState<string | undefined>(undefined);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet or it failed to load.
            // Make sure to disable the form submission until Stripe.js and Elements have loaded.
            return;
        }
        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            // Handle the case when the CardElement is not available.
            // You may display an error message or take other appropriate actions.
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(undefined);
        } else {
        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
        });
        const { client_secret } = await response.json();

        const { error } = await stripe.confirmCardPayment(client_secret, {
            payment_method: paymentMethod.id,
        });

        if (error) {
            setPaymentError(error.message ?? 'An error occurred');
            setPaymentSuccess(undefined);
        } else {
            setPaymentSuccess(`Payment succeeded with ${paymentMethod.id}`);
            setPaymentError(undefined);
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
