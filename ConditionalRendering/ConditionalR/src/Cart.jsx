const Cart = () => {
    const items=["Earbuds","PoweerBank","Charging cable","new SSD"]
  return (
    <div>
        {items.length>0 && <h1>You have {items.length} items in the cart</h1>}
        {items.map(i=>(
            <ul key={i}>
                <li>{i}</li>
            </ul>

        ))}

    </div>
  )
}

export default Cart