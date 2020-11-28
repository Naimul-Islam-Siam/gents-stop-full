import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = "pk_test_51HgBZnDON12blq6NCgcQMqVPq6PTOmYiTBYkBPOof1q4KGL5NLGKSjZPMGUNfPEdaALnT6lRmirGxnoeOtLMbl9r002OFfqRUm";

   const onToken = token => {
      axios({
         url: 'payment',
         method: 'POST',
         data: {
            amount: priceForStripe,
            token
         }
      }).then(res => {
         alert('Payment Successfully done!');
      }).catch(error => {
         console.log(`Payment error: ${error}`);
         alert('There was an issue with your payment. Please be sure you use the provided credit card.');
      });
   };

   return (
      <StripeCheckout
         label="Pay Now"
         name="Gents Stop"
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;