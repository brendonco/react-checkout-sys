
## Checkout System using React

### Setup

* npm install or yarn or yarn install
* npm run start or yarn start
* This will launch chrome browser and listen at port 3000. http://localhost:3000/products
* Place the company name after products to apply specific company discounted item. e.g. http://localhost:3000/products/apple

### Product price list
- Classic: $269.99
- Standout: $322.99
- Premium: $394.99

### Special pricing rules for privileged company:
- unilever: Gets 3 for 2 deal on Classic Ads
- apple: Gets a discount on Standout Ads where the price drops to $299.99 per ad
- nike: Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad
- ford:
  * Gets a 5 for 4 deal on Classic Ads
  * Gets a discount on Standout Ads where the price drops to $309.99 per ad
  * Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad

### Sample checkout object
```
[
  {
    "productId": "classic",
    "quantity": 12,
    "totalPrice": "3239.88"
  },
  {
    "productId": "standout",
    "quantity": 12,
    "totalPrice": "3599.88"
  },
  {
    "productId": "premium",
    "quantity": 12,
    "totalPrice": "4739.88"
  }
]
```

### Test
- npm run test or yarn test

<img width="981" alt="screen shot 2017-12-09 at 5 58 15 pm" src="https://user-images.githubusercontent.com/6521691/33794640-a1d4b9f4-dd0a-11e7-907e-56c9ce82b5bf.png">


### Sample Page
![mtqq1kzhku](https://user-images.githubusercontent.com/6521691/33774680-0d15c58a-dc77-11e7-9ffd-d90dba8aff20.gif)
