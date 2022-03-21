
const stripe = require('stripe')('sk_test_51KWYzQHirWnf3WJ2f1ZoEIWPCNBCipQz80eTvwJfabTH0xXkQPbRV7sWSJTBfU5UYsLGIhZ8V3hne5a0OJ9dXjbN00Mt5ZzxJj'); // 私鑰

exports.handler = async () => {
    // [create]
    const customer = await stripe.customers.create({
        // "address": null,
        // "balance": 0,
        // "description": "My 10 Test Customer (created for API docs)",
        "email": 'test2222333322@gmail.com',
        // "invoice_prefix": "E438F00",
        // "invoice_settings": {
        //   "custom_fields": null,
        //   "default_payment_method": null,
        //   "footer": null
        // },
        // "metadata": {},
        "name": '趙小姐heyyyyy',
        // "next_invoice_sequence": 1,
        // "phone": '0987654321',
        // "preferred_locales": [],
        // "shipping": null,
        // "tax_exempt": "none",
    });

    // [取回retrieve]
    // const customer = await stripe.customers.retrieve(
    //     'cus_LLG9ZunZMwr2SW'
    //   );

    // [更新update]
    // const customer = await stripe.customers.update(
    //     'cus_LLFuSkyW4yJtD3',
    //     // {metadata: {APIKey: 'testAPIkey111', APIID:'testAPIid111'}}
    //     {email: 'tse1@candyhouse.co'}
    //   );

    // [刪除客戶]
    // const customer = await stripe.customers.del(
    //     'cus_LKB3wkdSpCeFtU', // 客戶id
    //   );

    // [列出所有客戶]
    // const customers = await stripe.customers.list({
    //     email:'bbb@gmail.com',
    //   })
   
    // console.log(customer);
    
  }
  
exports.handler()