const stripe = require('stripe')('sk_test_51KWYzQHirWnf3WJ2f1ZoEIWPCNBCipQz80eTvwJfabTH0xXkQPbRV7sWSJTBfU5UYsLGIhZ8V3hne5a0OJ9dXjbN00Mt5ZzxJj'); // 私鑰
exports.handler = async () => {
    // [create]:輸入 客人id + 價格id
    const subscription = await stripe.subscriptions.create({
        customer: 'cus_LLFJ5ZWO9dHZmv',
        items: [
          {price: 'price_1KeYolHirWnf3WJ2g5QjYa45'},
        ],
      });

    // [retrieve]
    // const subscription = await stripe.subscriptions.retrieve(
    //     'sub_1Kdt0CHirWnf3WJ2BfGebEVU'
    //   );

    // const subscriptions = await stripe.subscriptions.list( 
    //     { customer: 'cus_LG3baKlunsPZnj'})
    // console.log(subscriptions);
    console.log(subscription);
}
exports.handler()