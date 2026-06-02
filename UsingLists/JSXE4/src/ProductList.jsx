const ProductList = () => {
    const Products=[
        {
            id:1,item:"Phone",price:"$800"
        },
        {
            id:2,item:"Laptop",price:"$1100"
        },
        {
            id:3,item:"Headphones",price:"$100"
        }

    ]
  return (
    <div>
        {Products.map(p=>(
            <ul key={p.id}>
                <li>Item:{p.item}</li>
                <li>Id:{p.id}</li>
                <li>Price:{p.price}</li>
            </ul>
        ))}

    </div>
  )
}

export default ProductList