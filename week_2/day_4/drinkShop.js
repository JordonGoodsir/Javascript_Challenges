const drinkShop = {
    title: "My Fancy Drink Shop",
    products: [{
        id: 1,
        title: 'Coca Cola',
        price: 4.32
      },
      {
        id: 2,
        title: 'Fanta',
        price: 4.22
      },
      {
        id: 3,
        title: 'Lift',
        price: 4.11
      }
    ],
    customers: {
        'jane@doe.com': {
        firstName: 'John',
        lastName: 'Doe',
        address: {
          streetNumber: 12,
          street: 'Main St',
          city: 'Brisbane',
          postcode: 4000
        },
        orders: [{
            id: 61721,
            status: 'delivered',
            items: [{
                productId: 1,
                qty: 2
              },
              {
                productId: 3,
                qty: 1
              },
              {
                productId: 2,
                qty: 3
              }
            ],
            notes: 'Please leave on doorstep'
          },
          {
            id: 82721,
            status: 'delivered',
            items: [{
              productId: 4,
              qty: 100
            }],
            notes: 'Really enjoying coke ATM'
          }
        ]
      }
    }
  }
  const shop = {
    shopTitle: () => {
      // Return the shop title (you have access to the shop object from here) 
      return drinkShop.title
    },
  
    upperCase: (string) => {
      // Return an uppercase version of string 
      return string.toUpperCase()
    },
  
    upperCaseShopTitle: () => { 
        return shop.upperCase(shop.shopTitle())
      // Return an uppercase shop title.
      // Don't repeat yourself. Use the two functions you just built!
    },
  
    productById: (productId) => { 
        
        return drinkShop.products.filter(prod => prod.id == productId)[0]

      // Return a specific product object
    },
  
    productCost: (productId) => { 
        return shop.productById(productId)[0].price
      // given a product id, return its cost. DRY ;)
    },
  
    formatAddress: (email) => { 
        return console.log(`${drinkShop.customers[email].address.streetNumber} ${drinkShop.customers[email].address.street}, ${drinkShop.customers[email].address.city}, ${drinkShop.customers[email].address.postcode}`)
      
        // Given a user's email, return their address in the format:
      // streetNumber street, city, postcode
      // E.g. 10 Amelia St, Sydney, 2000
      // Hint: some destructuring might save you a few lines.
    },
  
    totalCost: (email, orderId) => { 
    let currentOrder = drinkShop.customers[email].orders.filter(ord => ord.id == orderId)[0]

      let total = 0;
      for (i = 0; i < currentOrder.items.length; i++) { 
        total += shop.productCost(currentOrder.items[i].productId) * currentOrder.items[i].qty; 
      }
     console.log(total) 
     return total
    },
  
    addProduct: (id, title, price) => {
      // Add a product to the shop. 
    //   drinkShop.products.push({id,title,price}) 
    //   console.log(drinkShop.products)  
      return drinkShop.products.push({id,title,price})
    },
  
    updateProductPrice: (id, newPrice) => {
      return shop.productById(1).price = newPrice 
      
    }
  };  

shop.addProduct(7,"the", 2)

//   shop.upperCaseShopTitle()
  
//   module.exports = shop
  