import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  'pk_test_51QlKtCIptQ70Tz82tWAlO9Uw4Ugw1vC96Y5px8JQ68mQjeHzzfOKOdhYM87LcY5xKGvfReX4Iu71dr1mF61cTmAW003guyv6TS',
);
