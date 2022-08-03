//importing thr react utils
import react from 'react';
import { PayPalButton } from "react-paypal-button-v2";


let amount = 0;

const donationpopup = () =>
{
    return
    (
        <div>
            <div>
                <title id='makingdonation' />
                <h2 id='donationmethod'/>
            </div>
            <div>
                <PayPalButton
                    amount={amount}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        });
                    }}

                />
            </div>
        </div>
    )
   
    /*
    paypal.Buttons({
        
    }).render('#paypal-button-container');

    paypal.Buttons({
        createOrder: function (data, actions) {
            // Set up the transaction
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '0.01'
                    }
                }]
            });
        }
    }).render('#paypal-button-container');
    */
}
export default donationpopup;
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=YOUR_COMPONENTS"></script>
