import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
	"pk_test_51IzoAWBl0EBn5FBZXDVnzz2mRuywH91Kj2lWcXfWAg9iafRDsuUWcf6OZVeAwZ6B7xukBlpdAJamL9NBKihESOnU00BVYkHKbz";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	);
}
