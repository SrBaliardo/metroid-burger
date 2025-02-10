import * as Yup from 'yup';
import Stripe from 'stripe';
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  const total = items.reduce((acc, current) => {
    return current.price * current.quantity + acc;
  }, 0);

  return Math.round(total * 100);
};

class CreatePaymentIntentController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),
          }),
        ),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    const { products } = request.body;

    if (!products || products.length === 0) {
      return response.status(400).json({ error: 'Products cannot be empty.' });
    }

    const amount = calculateOrderAmount(products);

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'brl',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return response.json({
        clientSecret: paymentIntent.client_secret,
        status: paymentIntent.status,
        dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      return response
        .status(500)
        .json({ error: 'Failed to create payment intent.' });
    }
  }
}

export default new CreatePaymentIntentController();
