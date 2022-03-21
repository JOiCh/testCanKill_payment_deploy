const stripe = require('stripe')('sk_test_51KWYzQHirWnf3WJ2f1ZoEIWPCNBCipQz80eTvwJfabTH0xXkQPbRV7sWSJTBfU5UYsLGIhZ8V3hne5a0OJ9dXjbN00Mt5ZzxJj'); // 私鑰

exports.handler = async () => {
    // [取回]
    const paymentIntent = await stripe.paymentIntents.retrieve(
        'pi_3KeZm1HirWnf3WJ21WKxKTDg'
      );
    console.log(paymentIntent);
}
  
exports.handler()