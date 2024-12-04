const product = {
    name: 'Smartphone',
    details: {
    brand: 'XYZ',
    color: 'Black'
    }
   };
  const priceKey = product.details?.price
   if(priceKey){
    console.log(priceKey)
   }
   else{
    console.log("Price not available")
   }