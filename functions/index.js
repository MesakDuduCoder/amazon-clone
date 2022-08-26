eslint-disable

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LWgkwSFrDFumAraoFD5OkJx8QMwEgyGxZA36IKVaRIo5q64pn9PHV027wl2Bvlin5KQa4h541Yn1aOL4N6W81rA00QNBCOmSc');

//API

//App config
const app = express();

//middleware

app.use(cors({origin:true})); 
app.use(express.json());

//api routes


app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
 
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/clone-938f6/us-central1/api