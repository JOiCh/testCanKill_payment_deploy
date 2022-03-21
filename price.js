const stripe = require('stripe')('sk_test_51KWYzQHirWnf3WJ2f1ZoEIWPCNBCipQz80eTvwJfabTH0xXkQPbRV7sWSJTBfU5UYsLGIhZ8V3hne5a0OJ9dXjbN00Mt5ZzxJj'); // 私鑰

exports.handler = async () => {
    // 替一個產品創造一個價格
    const price = await stripe.prices.create({
        unit_amount: 8800,
        currency: 'jpy',
        // recurring: {interval: 'day'},
        product: 'prod_LFyDy1aDL2avHY',
      });

    // [取回]
    // const price = await stripe.prices.retrieve(
    //     'price_1KeGK4HirWnf3WJ2dTdN3ZvH'
    //   );

    // [更新]
    // const price = await stripe.prices.update(
    //     'price_1KfcJBHirWnf3WJ2CEUCrHqF',
    //     {metadata: {order_id: '6735'}}
    //   );

    // [列出所有]
    // const prices = await stripe.prices.list({
    //     limit: 3,
    //     product:'prod_LFyDy1aDL2avHY',
    //   });
    console.log(price);
}
  
exports.handler()