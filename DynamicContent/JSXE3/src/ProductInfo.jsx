/*
3. The `ProductInfo` component should return a `<div>` that dynamically displays product details:
   - Use a `product` object that contains the following properties:
    - `name`: "Laptop",
    - `price`: $1200,
    - `availability`: "In stock" 
*/
const ProductInfo = () => {
    const Product = {
        name:"Laptop",
        price:"$1200",
        availability:"inStock",
    }
  return (
    <div>
        You are Purchasing {Product.name} worth {Product.price} and is {Product.availability},Thankyou!

    </div>
  )
}

export default ProductInfo